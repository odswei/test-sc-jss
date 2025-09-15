// components/HeroBanner.tsx
import { JSX } from 'react';
import {
  Text,
  RichText,
  Link,
  LinkField,
  TextField,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeroBannerProps = ComponentProps & {
  fields: {
    heading: TextField;
    subheading: RichTextField;
    content: RichTextField;
    ctaButton1?: LinkField;
    ctaButton2?: LinkField;
  };
};

const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => {
  if (!fields) {
    return <></>;
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
        {fields.ctaButton1?.value?.href && <Link field={fields.ctaButton1} />}
        {fields.ctaButton2?.value?.href && <Link field={fields.ctaButton2} />}
      </div>
    </article>
  );
};

export default HeroBanner;
