import { JSX } from 'react';
import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ContentBlockProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => (
  <>
    { fields.heading?.value && <h1><Text field={fields.heading}/></h1> }
    <RichText field={fields.content} />
  </>
);

export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);

