module.exports = plop => {
  plop.setGenerator('config', {
    description: 'Create a config',
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
        templateFile: 'templates/standardConfig.ts.hbs'
      },
    ]
  });

  plop.setGenerator('auditConfig', {
    description: 'Create an audit config',
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
        templateFile: 'templates/auditConfigType.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/__tests__/config/audits/{{id}}.test.ts',
        templateFile: 'templates/auditConfigTest.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/config/audits/{{id}}.ts',
        templateFile: 'templates/auditConfig.ts.hbs'
      },
    ],
  });
};
