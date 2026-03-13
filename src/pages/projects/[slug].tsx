import projectsData from '@content/projects/projects.json';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  const canonicalUrl = `https://hexuntao.dpdns.org/projects/${project?.slug}`;

  return (
    <>
      <NextSeo
        title={`${project?.title}`}
        description={project?.description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: project?.updated_at || '',
            modifiedTime: project?.updated_at || '',
            authors: [''],
          },
          url: canonicalUrl,
          images: [
            {
              url: project?.image,
            },
          ],
          siteName: 'Blog ',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail {...project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData
    .filter((p) => p.is_show)
    .map((project) => ({
      params: { slug: project.slug },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project || !project.is_show) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
};
