import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keyword' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to eCommerce Shop',
  description: 'We sell the best products with an affordable price',
  keywords: 'electronics',
};

export default Meta;
