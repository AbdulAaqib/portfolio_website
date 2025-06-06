export const project = {
  name: 'project',
  title: 'project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of the project",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      title: "summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "linkToBuild",
      title: "linkToBuild",
      type: "url",
    },
    {
      name: "width",
      title: "width",
      type: "number",
    },
    {
      name: "heigth",
      title: "heigth",
      type: "number",
    },
    {
      name: "order",
      title: "order",
      type: "number",
    },
    {
      name: "projectGithubLink",
      title: "projectGithubLink",
      type: "url",
    },
  ],
}
