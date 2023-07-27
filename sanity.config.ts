/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './env';
import { schema } from './schemas/schema';

export default defineConfig({
  basePath: '/studio',
  Name: 'My Portfolio sanity studio',
  Title: 'My Portfolio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});
