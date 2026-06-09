import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Brilliance Content',
          fields: [
            {
              name: 'brillianceHome',
              type: 'group',
              label: 'Brilliance Home Content',
              admin: {
                condition: (data) => data?.slug === 'home',
              },
              fields: [
                {
                  name: 'hero',
                  type: 'group',
                  fields: [
                    { name: 'title', type: 'text' },
                    { name: 'description', type: 'textarea' },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                    { name: 'ctaText', type: 'text' },
                    { name: 'ctaLink', type: 'text' },
                    { name: 'secondaryText', type: 'text' },
                    { name: 'secondaryLink', type: 'text' },
                  ],
                },
                {
                  name: 'about',
                  type: 'group',
                  fields: [
                    { name: 'title', type: 'text' },
                    { name: 'description', type: 'textarea' },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                  ],
                },
                {
                  name: 'services',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text' },
                    { name: 'description', type: 'textarea' },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                    { name: 'ctaText', type: 'text' },
                    { name: 'ctaLink', type: 'text' },
                    { name: 'secondaryText', type: 'text' },
                    { name: 'secondaryLink', type: 'text' },
                  ],
                },
                {
                  name: 'testimonials',
                  type: 'array',
                  fields: [
                    { name: 'quote', type: 'textarea' },
                    { name: 'author', type: 'text' },
                    { name: 'stars', type: 'number', min: 1, max: 5 },
                  ],
                },
              ],
            },
            {
              name: 'brillianceAbout',
              type: 'group',
              label: 'Brilliance About Content',
              admin: {
                condition: (data) => data?.slug === 'about',
              },
              fields: [
                {
                  name: 'ceo',
                  type: 'group',
                  fields: [
                    { name: 'title', type: 'text' },
                    { name: 'name', type: 'text' },
                    { name: 'description', type: 'textarea' },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                  ],
                },
                {
                  name: 'clinic',
                  type: 'group',
                  fields: [
                    { name: 'title', type: 'text' },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                    { name: 'description1', type: 'textarea' },
                    { name: 'description2', type: 'textarea' },
                    { name: 'description3', type: 'textarea' },
                  ],
                },
              ],
            },
            {
              name: 'brillianceSpecials',
              type: 'group',
              label: 'Brilliance Specials Content',
              admin: {
                condition: (data) => data?.slug === 'specials',
              },
              fields: [
                { name: 'title', type: 'text' },
                {
                  name: 'deals',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text' },
                    { name: 'description', type: 'textarea' },
                    { name: 'originalPrice', type: 'text' },
                    { name: 'promoPrice', type: 'text' },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                    { name: 'alt', type: 'text' },
                  ],
                },
              ],
            },
            {
              name: 'brillianceContact',
              type: 'group',
              label: 'Brilliance Contact Content',
              admin: {
                condition: (data) => data?.slug === 'contact',
              },
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'email', type: 'text' },
                { name: 'phone', type: 'text' },
                { name: 'address', type: 'textarea' },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
