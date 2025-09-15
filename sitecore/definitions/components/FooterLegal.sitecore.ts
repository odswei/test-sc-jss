import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FooterLegal component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function FooterLegal(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FooterLegal',
    templateName: 'FooterLegal',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
  });
}
