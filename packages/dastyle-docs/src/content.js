const Content = {
  Button: [
    {
      type: 'component',
      ref: 'buttons/button-layout',
    },
  ],
  Colors: [
    {
      type: 'component',
      ref: 'colors/color-doc',
    },
  ],
  Code: [
    {
      type: 'header',
      content: 'Button',
    }, {
      type: 'text',
      content: 'button is cool button',
    }, {
      type: 'code',
      language: 'jsx',
      content: '<Button onClick={...} />',
    },
  ],
  Headers: [
    {
      type: 'component',
      ref: 'examples/sample',
    },
  ],
};

export default Content;
