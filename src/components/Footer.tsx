import { JSX } from 'react';
import { RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    content: Field<string>;
  };
};

/**
 * Footer component, with a rich text block.
 */
const Footer = ({ fields }: FooterProps): JSX.Element => <RichText field={fields.content} />;

export default withDatasourceCheck()<FooterProps>(Footer);
