import {
  Text,
  Field,
  ImageField,
  withDatasourceCheck,
  NextImage,
  RichText
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

// Define the type for each item in the array
type OurServiceItem = {
  id: string;
  name: string;
  fields: {
    heading: Field<string>;
    description: Field<string>;
    image: ImageField;
  };
};

type OurServicesProps = ComponentProps & {
  fields: {
    ourServices: OurServiceItem[];
  };
};

const OurServices = (props: OurServicesProps): JSX.Element => {
  const { ourServices } = props.fields;

  if (!ourServices || ourServices.length === 0) {
    return <p>No services available.</p>;
  }

  console.log(ourServices)
  return (
    <div>
      <p>OurServices Component</p>

      {ourServices.map((service) => (
        <div key={service.id}>
          <Text field={service.fields.heading} tag="h2" />
          <RichText field={service.fields.description} />
          <NextImage field={service.fields.image} />
        </div>
      ))}
    </div>
  );
};

export default withDatasourceCheck()<OurServicesProps>(OurServices);
