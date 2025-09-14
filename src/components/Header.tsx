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
  TextField,
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

type NavLink = {
  fields: {
    linkText: TextField;
    linkUrl: LinkField;
  };
};

type HeaderProps = ComponentProps & {
  fields: {
    logo: RichTextField;
    sharedHeaderTopBarContact: Item[];
    sharedHeaderTopBarSocialMedia: SocialLinkItem[];
    sharedNavLinks: NavLink[];
  };
};

const Header = (props: HeaderProps): JSX.Element => {
  const { sharedHeaderTopBarContact, sharedHeaderTopBarSocialMedia, logo, sharedNavLinks } =
    props.fields;
console.log(sharedNavLinks)
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
                <Link key={index} field={link}>
                  {iconClass ? (
                    <i className={iconClass}></i>
                  ) : (
                    image && <NextImage field={image} />
                  )}
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
            {sharedNavLinks?.map((item, idx) => (
              <Link key={idx} field={item.fields.linkUrl}>
                <Text field={item.fields.linkText} />
              </Link>
            ))}
            <i className="fa-solid fa-magnifying-glass" id="search"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default withDatasourceCheck()<HeaderProps>(Header);
