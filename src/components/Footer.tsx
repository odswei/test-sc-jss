import { JSX } from 'react';
import {
  withDatasourceCheck,
  Placeholder,
  RichText,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    content: RichTextField;
  };
};

const Footer = (props: FooterProps): JSX.Element => {
  const rendering = props.rendering;
  console.log('test', props.rendering);
  return (
    <section id="sec-6">
      <div className="container">
        <div className="about">
          <RichText field={props.fields.content} />
          <Placeholder name="jss-footer-social" rendering={rendering} />
        </div>
        <div className="links">
          <Placeholder name="jss-footer-left" rendering={rendering} />
        </div>
        <div className="posts">
          <Placeholder name="jss-footer-center" rendering={rendering} />
        </div>
        <div className="contact">
          <Placeholder name="jss-footer-right" rendering={rendering} />
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<FooterProps>(Footer);
