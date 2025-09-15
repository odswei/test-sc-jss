import { JSX } from 'react';
import {
  Field,
  Text,
  Item,
  withDatasourceCheck,
  Link,
  LinkField,
  ImageField,
  NextImage,
  RichText,
  RichTextField,
  Placeholder,
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

type HeaderProps = ComponentProps & {
  fields: {
    logo: RichTextField;
    sharedHeaderTopBarContact: Item[];
    sharedHeaderTopBarSocialMedia: SocialLinkItem[];
  };
};

const Header = (props: HeaderProps): JSX.Element => {
  const { sharedHeaderTopBarContact, sharedHeaderTopBarSocialMedia, logo } = props.fields;

  const rendering = props.rendering;

  if (!props) {
    return <></>;
  }

  return (
    <>
      <header className="top">
        <div className="container">
          {sharedHeaderTopBarContact &&
            sharedHeaderTopBarContact.map((item, index) => (
              <p key={`sharedListItem-${index}`}>
                <Text field={item.fields.textField as Field<string>} />
              </p>
            ))}
          <div className="social">
            {sharedHeaderTopBarSocialMedia?.map((item, index) => {
              const link = item.fields.externalLink;
              const iconClass = item.fields.iconClass?.value;
              const image = item.fields.logoImage?.value;

              return link?.value ? (
                <Link key={index} field={link} editable={true}>
                  {iconClass ? <i className={iconClass}></i> : image && <NextImage field={image} />}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </header>
      <header>
        <div className="hide" id="searchBar">
          <input
            type="search"
            name="searchBox"
            id="searchBox"
            placeholder="Type your search here..    Press [Esc] to exist"
          />
        </div>
        <div className="container">
          <RichText field={logo} />
          <label htmlFor="menu">
            <i className="fas fa-bars"></i>
          </label>
          <input type="checkbox" id="menu" />
          <nav>
            <Placeholder name="jss-header-navigation" rendering={rendering} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default withDatasourceCheck()<HeaderProps>(Header);
