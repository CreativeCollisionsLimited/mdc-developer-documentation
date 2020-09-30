/* globals Docute */

new Docute({
    target: '#docute',
    sourcePath: './docs/',
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
                    title: 'Deploy*',
                    link: '/installation/deploy'
                }
            ]
        },
        {
            title: 'Coding standards',
            links: [
                {
                    title: 'Naming conventions*',
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
                    title: 'Overview*',
                    link: '/tests/main'
                },
                {
                    title: 'Unit Tests*',
                    link: '/tests/unit'
                },
                {
                    title: 'Feature Test*',
                    link: '/tests/feature'
                },
                {
                    title: 'TDD*',
                    link: '/tests/tdd'
                },
                {
                    title: 'What and how to test?*',
                    link: '/tests/examples'
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
