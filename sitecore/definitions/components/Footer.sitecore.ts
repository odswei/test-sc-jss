import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Footer component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Footer(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Footer',
    templateName: 'Footer',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
    placeholders: ['jss-footer-social','jss-footer-left', 'jss-footer-center', 'jss-footer-right'],
  });
}
