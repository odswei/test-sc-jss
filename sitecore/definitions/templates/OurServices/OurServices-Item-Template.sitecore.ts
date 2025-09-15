import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function HeaderTopBarContactItemTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'OurServices-Item-Template',
    fields: [
        { name: 'title', type: CommonFieldTypes.SingleLineText },
        { name: 'description', type: CommonFieldTypes.MultiLineText },
        { name: 'image', type: CommonFieldTypes.Image},
    ],
  });
}
