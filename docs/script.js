/* globals Docute */

if (!localStorage.getItem('timestamp_dir')) {
    localStorage.setItem('timestamp_dir', "2020-10-02_12-00");
}

var timestamp_dir = localStorage.getItem('timestamp_dir');




new Docute({

    target: '#docute',
    sourcePath: './docs/',
    detectSystemDarkTheme: true,
    darkThemeToggler: true,
    highlight: ['js', 'bash', 'php', 'markdown', 'sql', 'json', 'regex', 'sass', 'less', 'html', 'git', 'vue'],
    nav: [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Links',
            link: '/links'
        }
    ],
    sidebar: [

        {
            title: 'Installation',
            links: [
                {
                    title: 'Setup',
                    link: '/installation/setup'
                },
                {
                    title: 'Manual Deployment',
                    link: '/installation/manual_deploy'
                }
            ]
        },
        {
            title: 'Coding standards',
            links: [
                {
                    title: 'Overview',
                    link: '/standards/main'
                },
                {
                    title: 'Naming conventions',
                    link: '/standards/naming'
                },
                {
                    title: 'Formatting Code*',
                    link: '/standards/format'
                }
            ]
        },
        {
            title: 'Testing the code',
            links: [
                {
                    title: 'Overview',
                    link: '/tests/main'
                },
                {
                    title: 'TDD*',
                    link: '/tests/tdd'
                },
                {
                    title: 'What and how to test?*',
                    link: '/tests/examples'
                },
                {
                    title: 'Unit Tests',
                    link: '/tests/unit'
                },
                {
                    title: 'API Test*',
                    link: '/tests/api'
                },
                {
                    title: 'Feature Test*',
                    link: '/tests/feature'
                },
                {
                    title: 'Integration Test*',
                    link: '/tests/integration'
                },
                {
                    title: 'Types of tests explained',
                    link: '/tests/types'
                }

            ]
        },
        {
            title: 'Command line tools',
            links: [
                {
                    title: 'Migrations',
                    link: '/cli/migrations'
                },
                {
                    title: 'Seeders',
                    link: '/cli/seeders'
                },
                {
                    title: 'Keyword generator',
                    link: '/cli/keyword_generator'
                }
            ]
        },
        {
            title: 'Git',
            links: [
                {
                    title: 'Overview*',
                    link: '/git/main'
                },
                {
                    title: 'Code Reviews',
                    link: '/git/code_reviews'
                },
                {
                    title: 'Git Flow*',
                    link: '/git/git_flow'
                },

                {
                    title: 'Branch naming conventions*',
                    link: '/git/naming'
                }
            ]
        },
        {
            title: 'Custom features',
            links: [
                {
                    title: 'Text Manipulations',
                    link: '/custom/text_manipulations'
                }
            ]
        }
    ]

});
