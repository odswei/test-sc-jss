import React from 'react';
import { Link, LinkField, TextField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';

type NavigationItem = {
  fields: {
    linkText: TextField;
    linkUrl: LinkField;
  };
};

type NavigationProps = ComponentProps & {
  fields: {
    sharedNavLinks: NavigationItem[];
  };
};

const NavigationHeader = (props: NavigationProps): JSX.Element => {
  if (!props.fields?.sharedNavLinks?.length) {
    return <></>;
  }

  return (
    <>
      {props.fields.sharedNavLinks?.map((item, idx) => (
        <Link key={idx} field={item.fields.linkUrl} />
      ))}
      <i className="fa-solid fa-magnifying-glass" id="search"></i>
    </>
  );
};

export default withDatasourceCheck()<NavigationProps>(NavigationHeader);
