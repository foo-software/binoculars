module.exports = plop => {
  plop.setGenerator('group', {
    description: 'Create a group',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What's the name? (ex: "seo-mobile")`
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/config/groups/{{name}}.ts',
        templateFile: 'templates/group.ts.hbs'
      }
    ]
  });
};
