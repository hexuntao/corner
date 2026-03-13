import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'usehooks-ts';

import EmptyState from '@/common/components/elements/EmptyState';
import Pagination from '@/common/components/elements/Pagination';
import SearchBar from '@/common/components/elements/SearchBar';
import { BlogItemProps } from '@/common/types/blog';

import BlogCardNew from './BlogCardNew';
import BlogFeaturedSection from './BlogFeaturedSection';

const POSTS_PER_PAGE = 6;

interface BlogListNewProps {
  initialData?: BlogItemProps[];
}

const BlogListNew = ({ initialData }: BlogListNewProps) => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // 客户端过滤和分页
  const { filteredPosts, totalPages, totalPosts } = useMemo(() => {
    // 按日期倒序排序（最新的在前）
    const allPosts = [...(initialData || [])].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    // 搜索过滤
    const filtered = debouncedSearchTerm
      ? allPosts.filter((post) => {
          const title = post.title?.rendered?.toLowerCase() || '';
          const excerpt = post.excerpt?.rendered?.toLowerCase() || '';
          const tags =
            post.tags_list?.map((t) => t.name.toLowerCase()).join(' ') || '';
          const searchLower = debouncedSearchTerm.toLowerCase();
          return (
            title.includes(searchLower) ||
            excerpt.includes(searchLower) ||
            tags.includes(searchLower)
          );
        })
      : allPosts;

    const totalPosts = filtered.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE) || 1;

    // 分页
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = filtered.slice(startIndex, endIndex);

    return {
      filteredPosts: paginatedPosts,
      totalPages,
      totalPosts,
    };
  }, [initialData, debouncedSearchTerm, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(
      {
        pathname: '/blog',
        query: {
          page: newPage,
          ...(debouncedSearchTerm && { search: debouncedSearchTerm }),
        },
      },
      undefined,
      { shallow: true },
    );
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event?.target?.value;
    setSearchTerm(searchValue);
    setPage(1);

    router.push(
      {
        pathname: '/blog',
        query: searchValue ? { page: 1, search: searchValue } : { page: 1 },
      },
      undefined,
      { shallow: true },
    );
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setPage(1);

    router.push(
      {
        pathname: '/blog',
        query: { page: 1 },
      },
      undefined,
      { shallow: true },
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const queryPage = Number(router.query.page);
    if (!isNaN(queryPage) && queryPage !== page) {
      setPage(queryPage);
    }
  }, [page, router.query.page, mounted]);

  const renderEmptyState = () =>
    filteredPosts.length === 0 && (
      <EmptyState message={searchTerm ? '没有找到匹配的文章' : '还没写呢.'} />
    );

  return (
    <div className='space-y-10'>
      <BlogFeaturedSection initialData={initialData} />

      <div className='space-y-5'>
        <div className='mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row'>
          <div className='flex items-center gap-2 px-1  text-xl font-medium'>
            {searchTerm ? (
              <div>
                <span className='mr-2 text-neutral-600 dark:text-neutral-400'>
                  搜索:
                </span>
                <span className='italic'>{searchTerm}</span>
              </div>
            ) : (
              <h4 className='text-neutral-800 dark:text-neutral-200'>
                最新文章
              </h4>
            )}
            <span className='rounded-full bg-neutral-300 px-2 py-1  text-xs text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50'>
              {totalPosts}
            </span>
          </div>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
            onClearSearch={handleClearSearch}
          />
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
          {filteredPosts.map((item: BlogItemProps, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <BlogCardNew {...item} />
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        )}

        {renderEmptyState()}
      </div>
    </div>
  );
};

export default BlogListNew;
