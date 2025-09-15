import React from 'react';
import { Link, LinkField, TextField, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
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
    title: TextField;
    sharedNavLinks: NavigationItem[];
  };
};

const NavigationFooter = (props: NavigationProps): JSX.Element => {
  if (!props.fields?.sharedNavLinks?.length) {
    return <></>;
  }

  return (
    <>
      <h1><Text field={props.fields.title}></Text></h1>
      {props.fields.sharedNavLinks?.map((item, idx) => (
        <Link key={idx} field={item.fields.linkUrl} />
      ))}
    </>
  );
};

export default withDatasourceCheck()<NavigationProps>(NavigationFooter);
