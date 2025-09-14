import { SitecoreIcon, Manifest, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Styleguide-FieldUsage-RichText component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function RichText(manifest: Manifest): void {
  manifest.addComponent({
    name: 'RichText',
    templateName: 'Rich-Text-Template',
    icon: SitecoreIcon.TextField,
    fields: [{ name: 'content', type: CommonFieldTypes.RichText }]
  });
}
