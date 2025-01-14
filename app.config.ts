export default defineAppConfig({
  docus: {
    title: 'KubeCamp',

    description: 'The best place to start your Kubernetes Journey',

    url: 'https://kubecamp.kcdlahore.org/',

    image: 'https://i.ibb.co/PGkhK2D/logo-07df0d71aa68491bbca25e45a62ac299.png',

    socials: {},

    layout: 'default',

    header: {
      title: '',
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    footer: {
      credits: {
        icon: '',
        text: 'Made with ❤️by Adil Shahzad',
        href: 'https://www.linkedin.com/in/adilshehzad7/'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },

    github: {
      branch: 'main',
      repo: '/KubeCamp/',
      owner: 'CNCF-Lahore',
      edit: false
    },
  }
})
