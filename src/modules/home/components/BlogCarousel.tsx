import blogsData from '@content/blogs/blogs.json';
import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { BlogItemProps } from '@/common/types/blog';
import BlogCardNew from '@/modules/blog/components/BlogCardNew';

const BlogCarousel = () => {
  // 获取前 4 篇文章，按日期倒序排序（最新的在前）
  const blogData: BlogItemProps[] = useMemo(() => {
    return [...blogsData]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4)
      .map((blog) => ({
        ...blog,
        total_views_count: 0,
      }));
  }, []);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const renderBlogCards = () => {
    return blogData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className='min-w-[326px] gap-x-5'
      >
        <BlogCardNew {...item} />
      </motion.div>
    ));
  };

  return (
    <div
      className='flex gap-4 overflow-x-scroll p-1 scrollbar-hide'
      {...events}
      ref={ref}
    >
      {renderBlogCards()}
    </div>
  );
};

export default BlogCarousel;
