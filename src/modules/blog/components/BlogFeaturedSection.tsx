import React from 'react';

import { BlogItemProps } from '@/common/types/blog';

import BlogFeaturedHero from './BlogFeaturedHero';

interface BlogFeaturedSectionProps {
  initialData?: BlogItemProps[];
}

const BlogFeaturedSection = ({
  initialData = [],
}: BlogFeaturedSectionProps) => {
  // 取前 4 篇文章作为精选文章，按日期倒序排序（最新的在前）
  const featuredData = [...initialData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  if (featuredData.length === 0) {
    return null;
  }

  return <BlogFeaturedHero data={featuredData} />;
};

export default BlogFeaturedSection;
