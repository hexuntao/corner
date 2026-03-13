import blogsData from '@content/blogs/blogs.json';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { BlogItemProps } from '@/common/types/blog';
import BlogListNew from '@/modules/blog';

const PAGE_TITLE = '文章';

interface BlogPageProps {
  initialBlogs: BlogItemProps[];
}

const BlogPage: NextPage<BlogPageProps> = ({ initialBlogs }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE}`} />
      <Container className='xl:!-mt-5' data-aos='fade-up'>
        <BlogListNew initialData={initialBlogs} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = blogsData.map((blog) => ({
    ...blog,
    total_views_count: 0,
  }));

  return {
    props: {
      initialBlogs: posts,
    },
    revalidate: 60,
  };
};

export default BlogPage;
