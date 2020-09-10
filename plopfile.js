module.exports = plop => {
  plop.setGenerator('definition', {
    description: 'Create a definition',
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
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/config/{{type}}/{{name}}.ts',
        templateFile: 'templates/standardDefinition.ts.hbs'
      },
    ]
  });

  plop.setGenerator('auditDefinition', {
    description: 'Create an audit definition',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message: `What is the id? (ex: "aria-roles")`
      },
      {
        type: 'input',
        name: 'path',
        message: `What is the path? (ex: "accessibility/aria-roles")`
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/@types/lighthouse-audit-{{id}}.d.ts',
        templateFile: 'templates/auditDefinitionType.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/__tests__/config/audits/{{id}}.test.ts',
        templateFile: 'templates/auditDefinitionTest.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/config/audits/{{id}}.ts',
        templateFile: 'templates/auditDefinition.ts.hbs'
      },
    ],
  });
};
