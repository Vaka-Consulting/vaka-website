import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, image } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import { type Lists } from '.keystone/types'

export const project = {
  Project: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our Post list
    fields: {
      title: text({ validation: { isRequired: true } }),
      subtitle: text({ validation: { isRequired: true } }),
      image: image({ storage: 'local_images' }),
      shortDescription: text({ validation: { isRequired: true }, ui: { displayMode: 'textarea' } }),
      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      description: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      externalLink: text({ validation: { isRequired: true } }),
    },
  }),
} satisfies Lists
