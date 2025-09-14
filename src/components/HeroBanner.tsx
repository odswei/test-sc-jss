// components/HeroBanner.tsx
import { JSX } from 'react';
import { Text, RichText, Link, Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeroBannerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    subheading: Field<string>;
    content: Field<string>;
    ctaButton1?: LinkField;
    ctaButton2?: LinkField;
  };
};

/**
 * HeroBanner component without withDatasourceCheck
 */
const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => {
  if (!fields) {
    return <></>; // or you can show a fallback UI here
  }

  return (
    <article>
      <div className="container">
        <h1>
          <Text field={fields.heading} />
        </h1>
        <h2>
          <RichText field={fields.subheading} />
        </h2>
        <RichText field={fields.content} />
        {fields.ctaButton1?.value?.href && (
          <Link field={fields.ctaButton1} className="btn btn-primary" />
        )}
        {fields.ctaButton2?.value?.href && (
          <Link field={fields.ctaButton2} className="btn btn-secondary" />
        )}
      </div>
    </article>
  );
};

export default HeroBanner;
