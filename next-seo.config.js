const canonicalUrl = 'https://hexuntao.dpdns.org';
const metaImage =
  'https://camo.githubusercontent.com/41935d0f324d6684b781fbd9c63e622d0535df53f8e248ef81bebbffc637188d/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966';
const metaDescription = 'Personal Website';

const defaultSEOConfig = {
  defaultTitle: 'Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'hexuntao.dpdns.org og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'hexuntao.dpdns.org og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'hexuntao.dpdns.org og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'hexuntao.dpdns.org',
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
};

export default defaultSEOConfig;
