import projectsData from '@content/projects/projects.json';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = '项目';
const PAGE_DESCRIPTION = '参与过的几个项目，包括私有项目和企业项目';

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  // 按 is_featured 和 updated_at 排序
  const sortedProjects = projectsData.sort((a, b) => {
    if (a.is_featured !== b.is_featured) {
      return a.is_featured ? -1 : 1;
    }
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  // 只显示 is_show 为 true 的项目
  const visibleProjects = sortedProjects.filter((p) => p.is_show);

  return {
    props: {
      projects: visibleProjects,
    },
    revalidate: 60,
  };
};
