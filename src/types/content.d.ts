declare module '@content/blogs/blogs.json' {
  import { BlogItemProps } from '@/common/types/blog';
  const blogs: BlogItemProps[];
  export default blogs;
}

declare module '@content/projects/projects.json' {
  import { ProjectItemProps } from '@/common/types/projects';
  const projects: ProjectItemProps[];
  export default projects;
}
