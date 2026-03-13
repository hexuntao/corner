import blogsData from '@content/blogs/blogs.json';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import { formatExcerpt } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';

const GiscusComment = dynamic(
  () => import('@/modules/blog/components/GiscusComment'),
);

interface BlogDetailPageProps {
  blog: BlogDetailProps;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const blogData = blog || {};

  const slug = `blog/${blogData?.slug}`;
  const canonicalUrl = `https://hexuntao.dpdns.org/${slug}`;
  const description = formatExcerpt(blogData?.excerpt?.rendered);

  const incrementViews = async () => {
    await axios.post(`/api/views?slug=${blogData?.slug}&id=${blogData?.id}`);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      incrementViews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NextSeo
        title={`${blogData?.title?.rendered}`}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData?.date,
            modifiedTime: blogData?.modified,
            authors: ['hexuntao'],
          },
          url: canonicalUrl,
          images: [
            {
              url: blogData?.featured_image_url,
            },
          ],
          siteName: 'hexuntao corner',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetail {...blogData} />
        <section id='comments'>
          <GiscusComment isEnableReaction={false} />
        </section>
      </Container>
    </>
  );
};

export default BlogDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogsData.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: {
        ...blog,
        total_views_count: 0,
      },
    },
    revalidate: 60,
  };
};
