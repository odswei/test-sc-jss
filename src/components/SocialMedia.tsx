import { JSX } from 'react';
import {
  withDatasourceCheck,
  Link,
  LinkField,
  ImageField,
  NextImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type SocialLinkItem = {
  fields: {
    externalLink: LinkField;
    iconClass?: {
      value: string;
    };
    logoImage?: ImageField;
  };
};

type SocialMediaProps = ComponentProps & {
  fields: {
    sharedSocialMedia: SocialLinkItem[];
  };
};

const SocialMedia = (props: SocialMediaProps): JSX.Element => {
  const { sharedSocialMedia } = props.fields;

  if (!props) {
    return <></>;
  }

  return (
    <>
      {sharedSocialMedia?.map((item, index) => {
        const link = item.fields.externalLink;
        const iconClass = item.fields.iconClass?.value;
        const image = item.fields.logoImage?.value;

        return link?.value ? (
          <Link key={index} field={item.fields.externalLink} editable={false}>
            {iconClass ? (
              <i className={item.fields.iconClass?.value}></i>
            ) : (
              image && <NextImage field={item.fields.logoImage?.value} />
            )}
          </Link>
        ) : null;
      })}
    </>
  );
};

export default withDatasourceCheck()<SocialMediaProps>(SocialMedia);
