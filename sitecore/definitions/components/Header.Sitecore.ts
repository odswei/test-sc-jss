import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

/**
 * Adds the Header component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Header(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Header',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'sharedHeaderTopBarContact',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Header/TopBar/Contact`,
      },
      {
        name: 'sharedHeaderTopBarSocialMedia',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Header/TopBar/SocialMedia`,
      },
      { name: 'logo', type: CommonFieldTypes.RichText },
      {
        name: 'sharedNavLinks',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Header/Navigation`,
      },
    ],
  });
}
