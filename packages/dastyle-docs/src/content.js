const Content = {
    "Some Title": {
        Button: [
            {
                type: 'header',
                content: 'Button'
            }, {
                type: 'text',
                content: 'button is cool button'
            }, {
                type: 'code',
                language: 'jsx',
                content: '<Button onClick={...} />'
            }

        ],
        Colors: [
            {
                type: 'component',
                ref: 'examples/sample'
            }
        ]
    },
    "Another Title": {
        Code: [
            {
                type: 'header',
                content: 'Button'
            }, {
                type: 'text',
                content: 'button is cool button'
            }, {
                type: 'code',
                language: 'jsx',
                content: '<Button onClick={...} />'
            }

        ],
        Headers: [
            {
                type: 'component',
                ref: 'examples/sample'
            }
        ]
    }
}

export default Content;
