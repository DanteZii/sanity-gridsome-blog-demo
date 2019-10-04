export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9722e064645eed6766d4b2',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-demo-studio',
                  apiId: 'dd86cf39-02aa-4949-808d-de5b6f55ddce'
                },
                {
                  buildHookId: '5d9722e00b0256e732d9dd72',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-demo',
                  apiId: '512d5699-1ebd-47ab-a7f8-33a792537524'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanteZii/sanity-gridsome-blog-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-demo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
