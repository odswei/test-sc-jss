import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the HeroBanner component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Footer(manifest: Manifest): void {
  manifest.addComponent({
    name: 'HeroBanner',
    templateName: 'HeroBanner',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'subheading', type: CommonFieldTypes.RichText },
      { name: 'content', type: CommonFieldTypes.RichText },
      { name: 'ctaButton1', type: CommonFieldTypes.GeneralLink },
      { name: 'ctaButton2', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
