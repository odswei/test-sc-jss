// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

/**
 * Adds the OurServices component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function OurServices(manifest: Manifest): void {
    manifest.addRouteType({
    name: 'OurServicesRouteType',
    fields: [
        { name: 'title', type: CommonFieldTypes.SingleLineText },
        { name: 'description', type: CommonFieldTypes.MultiLineText },
        { name: 'image', type: CommonFieldTypes.Image},
    ],
  });
  manifest.addComponent({
    name: 'OurServices',
    icon: SitecoreIcon.DocumentTag,
    fields: [      
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'ctaButtonText', type: CommonFieldTypes.SingleLineText },
      {
        name: 'ourServices',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/home/our-services`,
      }],
})
}