import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function SocialLinkItemTemplate(manifest: Manifest): void {
  manifest.addTemplate({
    name: 'Social-Link-Item-Template',
    fields: [
      { name: 'externalLink', type: CommonFieldTypes.GeneralLink },
      { name: 'iconClass', type: CommonFieldTypes.SingleLineText },
      { name: 'logoImage', type: CommonFieldTypes.Image },
    ],
  });
}
