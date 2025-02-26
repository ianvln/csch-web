import React from 'react';
import Head from 'next/head';

interface HeadProps {
  contentType?: string;
  description?: string;
  title?: string;
}

const HeadComponent: React.FC<HeadProps> = props => {
  const { contentType, description, title } = props;
  let metaTitle = `${title} | CS Career Hub`;
  let metaDescription =
    description ||
    "CS Career Hub was created to help guide engineers at any point in their career. Over 18,000 users have joined our community, ranging from first-year students to hiring managers. In the past few years, we've facilitated thousands of mock interviews and resume reviews with candidates. With plenty of plans on the roadmap, you can expect even more to come.";
  let metaImage = 'https://cscareerhub.com/csch-statico.png';

  return (
    <Head>
      <title>{metaTitle}</title>
      <link rel="icon" href="/csch-statico-round.png" />
      <link href="https://fonts.googleapis.com/css?family=Inter|Roboto" rel="stylesheet" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1" />
      <meta name="description" content={metaDescription} />
      <meta name="author" content="CS Career Hub" />
      <meta
        name="keywords"
        content="cs careers, programming careers, careers, computer science careers, computer science"
      />
      <meta name="thumbnail" content={metaImage} />
      <meta name="image" content={metaImage} />
      <meta name="title" content={metaTitle} />
      <meta property="og:type" content={contentType || 'website'} />
      <meta property="og:site_name" content="cscareerhub" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://cscareerhub.com" />
      <meta property="twitter:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:site" content="@cscareerhub" />
    </Head>
  );
};

HeadComponent.defaultProps = {
  title: 'CS Career Hub'
};

export default HeadComponent;
