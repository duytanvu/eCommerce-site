import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to eShop',
  description: 'We sell the best products with an affordable price',
  keywords: 'electronics',
};

export default Meta;
