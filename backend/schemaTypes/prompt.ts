export default {
  name: 'prompt',
  title: 'Prompt',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'prompt',
      title: 'Prompt',
      type: 'string',
    },
    {
      name: 'createBy',
      title: 'Create By',
      type: 'createBy',
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'comment'}],
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{type: 'save'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}
