export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62af2b2e446d525086d29c86',
                  title: 'Sanity Studio',
                  name: 'aarati-online-studio',
                  apiId: '1df51673-4183-460a-b634-31e2c40e7a42'
                },
                {
                  buildHookId: '62af2b2e6d06764cf226becf',
                  title: 'Portfolio Website',
                  name: 'aarati-online',
                  apiId: '5f25402d-20f7-491a-ac05-1d626fadae99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AaratiAkkapeddi/aarati-online',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://aarati-online.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
