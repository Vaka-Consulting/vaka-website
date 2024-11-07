import { group, list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'

export const page = {
  Page: list({
    access: allowAll,

    graphql: {
      omit: {
        query: false,
        create: false,
        update: false,
        delete: false,
      },
    },

    fields: {
      title: text({ validation: { isRequired: true } }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
      }),
    },
  }),

  Homepage: list({
    access: allowAll,

    graphql: {
      omit: {
        query: false,
        create: true,
        update: false,
        delete: true,
      },
    },

    // this is the fields for our Post list
    fields: {
      title: text({ validation: { isRequired: true } }),

      // Hero Section Group
      ...group({
        label: 'Hero Section',
        fields: {
          heroSectionTitle: text(),
          heroSectionContent: document({
            formatting: true,
            layouts: [
              [1, 1],
              [1, 1, 1],
              [2, 1],
              [1, 2],
              [1, 2, 1],
            ],
            links: true,
          }),
        },
      }),

      // Hero Section Group
      ...group({
        label: 'About Section',
        fields: {
          aboutSectionTitle: text(),
          aboutSectionContent: document({
            formatting: true,
            layouts: [
              [1, 1],
              [1, 1, 1],
              [2, 1],
              [1, 2],
              [1, 2, 1],
            ],
            links: true,
          }),
        },
      }),

      // Work Section Group
      ...group({
        label: 'Work Section',
        fields: {
          workSectionTitle: text(),
          workSectionContent: document({
            formatting: true,
            layouts: [
              [1, 1],
              [1, 1, 1],
              [2, 1],
              [1, 2],
              [1, 2, 1],
            ],
            links: true,
            // relationships: {},
          }),
        },
      }),

      // Contact Section Group
      ...group({
        label: 'Contact Section',
        description: 'Content Section',
        fields: {
          contactSectionTitle: text(),
          contactSectionContent: document({
            formatting: true,
            layouts: [
              [1, 1],
              [1, 1, 1],
              [2, 1],
              [1, 2],
              [1, 2, 1],
            ],
            links: true,
          }),
          twitter: text({ validation: { isRequired: true } }),
          linkedin: text({ validation: { isRequired: true } }),
        },
      }),
    },
  }),
}
