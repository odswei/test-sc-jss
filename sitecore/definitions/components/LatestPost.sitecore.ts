// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
import packageJson from '../../../package.json';

/**
 * Adds the LatestPost component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function LatestPost(manifest: Manifest): void {
  manifest.addRouteType({
    name: 'LatestPostRouteType',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'day', type: CommonFieldTypes.Number},
      { name: 'month', type: CommonFieldTypes.SingleLineText},
      { name: 'title', type: CommonFieldTypes.SingleLineText}
    ]
  })

  manifest.addComponent({
    name: 'LatestPost',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      {
        name: 'latestPost',
        type: CommonFieldTypes.ContentList,
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/home/latest-post`,
      },
    ],
  });
}
