import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

/**
 * Adds the Footer component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function SpcialMedia(manifest: Manifest): void {
  manifest.addComponent({
    name: 'SocialMedia',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'sharedSocialMedia',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Shared/SocialMedia`,
      },
    ],
  });
}
