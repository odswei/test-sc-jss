import {
  Text,
  withDatasourceCheck,
  RichTextField,
  RichText,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type FooterContactUsProps = ComponentProps & {
  fields: {
    title: TextField;
    content: RichTextField;
  };
};

const FooterContactUs = (props: FooterContactUsProps): JSX.Element => (
  <>
    <h1>
      <Text field={props.fields.title} />
    </h1>
    <RichText field={props.fields.content} />
  </>
);

export default withDatasourceCheck()<FooterContactUsProps>(FooterContactUs);
