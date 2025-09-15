import { JSX } from 'react';
import { RichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';

type ContentBlockProps = {
  fields: {
    content: Field<string>;
  };
};

const FooterLegal = ({ fields }: ContentBlockProps): JSX.Element => (
  <section id="sec-7">
    <div className="container">
        <RichText field={fields.content} />
    </div>
  </section>
);

export default FooterLegal;