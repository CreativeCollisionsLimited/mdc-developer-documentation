# Developer documentation tool

Framework: https://docute.org/

## How to write markdown
Markdown is easy to use and learn, just create a new file with `.md` extension and start typing.
Formatting your code is done with `#`, `*` and `_` symbols.

[Guide on how to use markdown formatting and features](https://guides.github.com/features/mastering-markdown/)

example markdown file:
```markdown
# Title

The content goes here...

add an empty line to get paragraphs

list made with '*'
* item 1
* item 2
* item 3


```



## How to add a new side menu item:

You can simply add your new side menu point by editing in the root of the project the `srcipt.js` file, and adding your new items under `sidebar` in json format.

[more details on this](https://docute.org/options#sidebar)

for example
```js
    sidebar: [

        {
            title: 'Installation',
            links: [
                {
                    title: 'Setup',
                    link: '/installation/setup'
                },
                {
                    title: 'Deploy',
                    link: '/installation/deploy'
                }
            ]
        },
        {
            title: 'Your new item',
            links: [
                {
                    title: 'new item one',
                    link: '/new_item'
                },
                {
                    title: 'New item two',
                    link: '/sub_directory/two'
                }
            ]
        }
]

```