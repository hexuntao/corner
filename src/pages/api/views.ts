import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/common/libs/prisma';

interface ResponseData {
  views: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Invalid slug parameter' });
  }

  if (req.method === 'GET') {
    try {
      const contentMeta = await prisma.contentmeta.findUnique({
        where: { slug },
        select: { views: true },
      });

      const contentViewsCount = contentMeta?.views ?? 0;

      const response: ResponseData = {
        views: contentViewsCount,
      };

      return res.json(response);
    } catch (error: any) {
      // 数据库连接失败时返回 0 而不是 500 错误
      console.error('Error fetching content meta:', error?.message || error);

      // 如果是数据库连接错误，优雅降级返回 0
      if (
        error?.code === 'P1001' ||
        error?.message?.includes('database') ||
        error?.message?.includes('PrismaClientInitializationError')
      ) {
        return res.json({ views: 0 });
      }

      return res.status(500).json({ error: 'Failed to fetch content meta' });
    }
  } else if (req.method === 'POST') {
    try {
      // 先尝试更新，如果记录不存在则创建
      const contentMeta = await prisma.contentmeta.upsert({
        where: { slug },
        update: {
          views: {
            increment: 1,
          },
        },
        create: {
          slug,
          type: 'blog',
          views: 1,
        },
        select: { views: true },
      });
      return res.json(contentMeta);
    } catch (error: any) {
      // 数据库连接失败时静默处理
      console.error('Error updating views count:', error?.message || error);

      // 如果是数据库连接错误，返回 0 而不是报错
      if (
        error?.code === 'P1001' ||
        error?.message?.includes('database') ||
        error?.message?.includes('PrismaClientInitializationError')
      ) {
        return res.json({ views: 0 });
      }

      return res.status(500).json({ error: 'Failed to update views count' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
