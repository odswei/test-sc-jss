import {
  Link,
  Text,
  TextField,
  Field,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type LatestPostItem = {
  id: string;
  url: string;
  fields: {
    link: LinkField;
    day: Field<string>;
    month: Field<string>;
    title: Field<string>;
  };
};

type LatestPostProps = ComponentProps & {
  fields: {
    title: TextField;
    latestPost: LatestPostItem[];
  };
};

const LatestPost = ({ fields }: LatestPostProps): JSX.Element => (
  <>
    <h1>
      <Text field={fields.title}></Text>
    </h1>
    {fields.latestPost?.map((item, index) => (
      <>
      <Link key={index} field={{ value: { href: item.url } }} editable={false}>
          <span>
            {item.fields.day?.value}
            <br />
            {item.fields.month?.value}
          </span>
          {item.fields.title?.value}
      </Link>
      </>
    ))}
  </>
);

export default withDatasourceCheck()<LatestPostProps>(LatestPost);
