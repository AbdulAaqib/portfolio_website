export const social = {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "platform for social media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
  ],
}
