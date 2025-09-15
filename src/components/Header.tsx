import { JSX } from 'react';
import {
  Field,
  Text,
  Item,
  withDatasourceCheck,
  RichText,
  RichTextField,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    logo: RichTextField;
    sharedHeaderTopBarContact: Item[];
  };
};

const Header = (props: HeaderProps): JSX.Element => {
  const { sharedHeaderTopBarContact, logo } = props.fields;

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
            <Placeholder name="jss-header-social" rendering={rendering} />
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
