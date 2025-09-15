import React from 'react';
import {
  Text,
  NextImage,
  ImageField,
  TextField,
  RichTextField,
  Link,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type ServiceItem = {
  id: string;
  url: string;
  fields: {
    title: TextField;
    description: RichTextField;
    image: ImageField;
    ctaButtonText: TextField;
  };
};

type OurServicesProps = ComponentProps & {
  fields: {
    heading: TextField;
    ctaButtonText: TextField;
    ourServices: ServiceItem[];
  };
};

const OurServices = (props: OurServicesProps): JSX.Element => {
  console.log(props);

  if (!props.fields?.ourServices?.length) {
    return <></>;
  }

  return (
    <section id="sec-3">
      <div className="container">
        <h1>
          <Text field={props.fields.heading}></Text>
        </h1>
        <div className="cont">
          {props.fields.ourServices.map((service) => (
            <div key={service.id} className="card border-0">
              <div>
                <NextImage field={service.fields.image} className="card-img-top" alt="..." />
                <h5 className="caption">
                  <Text field={service.fields.title} />
                </h5>
              </div>
              <div className="card-body px-0 pt-4">
                <p>
                  <Text field={service.fields.description} />
                </p>
                <Link field={{ value: { href: service.url } }}>
                  <Text field={props.fields.ctaButtonText}></Text>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<OurServicesProps>(OurServices);
