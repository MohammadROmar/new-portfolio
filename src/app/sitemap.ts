import type { MetadataRoute } from 'next';

import { getProjectSitemapEntries } from '@/constants/projects';
import { RESUME_UPDATED_AT } from '@/constants/resume';
import { HOME_UPDATED_AT, SITE_URL } from '@/constants/siteConfig';
import { assertValidIsoDate, getLatestIsoDate } from '@/lib/isoDate';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getProjectSitemapEntries();
  const projectDates = projectEntries.map(({ updatedAt }) => updatedAt);

  assertValidIsoDate(HOME_UPDATED_AT, 'HOME_UPDATED_AT');
  assertValidIsoDate(RESUME_UPDATED_AT, 'RESUME_UPDATED_AT');
  for (const { slug, updatedAt } of projectEntries) {
    assertValidIsoDate(updatedAt, `updatedAt of project "${slug}"`);
  }

  return [
    {
      url: SITE_URL,
      lastModified: getLatestIsoDate([HOME_UPDATED_AT, ...projectDates]),
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: getLatestIsoDate(projectDates),
    },
    { url: `${SITE_URL}/resume`, lastModified: RESUME_UPDATED_AT },
    ...projectEntries.map(({ slug, updatedAt }) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: updatedAt,
    })),
  ];
}
