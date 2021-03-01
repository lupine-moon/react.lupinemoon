const baseUrl = 'https://github.com/lupine-moon/react.lupinemoon';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Lupine Moon. All Rights Reserved.`,
  author: {
    name: 'Lupine Moon',
    github: 'https://github.com/lupine-moon',
    email: 'lupine-moon@gmail.com',
  },
  repo: {
    url: baseUrl,
    blobUrl: `${baseUrl}/blob/master`,
  },
  seo: {
    title: 'Lupine Moon',
    titleTemplate: '%s - Lupine Moon',
    description: 'The Lupine Moon Website.',
    siteUrl: 'https://www.lupinemoon.co.za',
  },
};

export default siteConfig;
