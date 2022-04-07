// config.js
module.exports = {
    github: {
        username: 'Nasware', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 20, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/akinkunmi-gbolahan-nasiru-49a369199/',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://nasware.github.io',
        phone: '',
        email: 'akingbolahan12@gmail.com'
    },
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'Vue.js',
        'Node.js',
        'Jquery',
        'MySQL',
        'Git',
        'Docker',
        'CSS',
        'Antd',
        'Python',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'NACWC',
            position: 'Software Developer',
            from: 'Feb 2021',
            to: 'Present'
        }
    ],
    education: [
        { 
            institution: 'Nigerian Army Institute of Technology and Environmental Science',
            degree: 'National Diploma',
            from: '2018',
            to: '2020'
        },
        { 
            institution: 'Command Day Secondary School, Ilese, Ijebu-Ode, Ogun State',
            degree: 'WASSCE',
            from: '',
            to: '',
        }
    ],
//     blog: {
//         // Display blog posts from your medium or dev.to account. (Optional)
//         source: 'dev.to', // medium | dev.to
//         username: 'arifszn',
//         limit: 2 // How many posts to display. Max is 10.
//     },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '2617601', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
