// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';


/**
 * Adds the Navigation component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Navigation(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Navigation',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'sharedNavLinks',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Header/Navigation`,
      },
    ]
  });
}
