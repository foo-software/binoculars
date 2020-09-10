module.exports = plop => {
  plop.setGenerator('group', {
    description: 'Create a group',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What's the name? (ex: "seo-mobile")`
      },
      {
        type: 'input',
        name: 'type',
        message: `What type? (ex: "groups")`
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/config/{{type}}/{{name}}.ts',
        templateFile: 'templates/definition.ts.hbs'
      }
    ]
  });
};
