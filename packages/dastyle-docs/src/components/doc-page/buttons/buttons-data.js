const Content = {
  'Standard Buttons': [
    {
      title: 'Primary Button',
      text: 'Default for calls to action and other primary interactions that mus be visually prominent',
      buttonComponentName: 'button-layout',
      statesText: [
        ['Active', 'Type #FFFFFF // Background #0FA2E2'],
        ['Hover', 'Type #FFFFFF // Background #0086C3'],
        ['Select', 'Type #FFFFFF // Background #0073A8'],
        ['Disabled', 'Type #C4C4C4 // Background #F7F7F7'],
      ],
      classNamesArray: [
        'button-large',
        'button-normal',
        'button-small',
        'button-disabled',
      ],
    },
    {
      title: 'Grayscale Palette',
      text: 'Grayscale paelette colors are used for type, backgrounds, menus and borders.',
      colorsArray: [
        {
          colorTitle: 'Blackish',
          colorText: 'Type and Primary buttons.',
          colorName: 'blackish',
        },
        {
          colorTitle: 'American Gray',
          colorText: 'Medium hirarchy.',
          colorName: 'american-gray',
        },
        {
          colorTitle: 'Explosive',
          colorText: 'Low hirarchy.',
          colorName: 'explosive',
        },
        {
          colorTitle: 'Dark Marble',
          colorText: 'Borders and backgrounds.',
          colorName: 'dark-marble',
        },
        {
          colorTitle: 'Marble',
          colorText: 'Backgrounds only.',
          colorName: 'marble',
        },
      ],
    },
  ],
  'Status Colors': [
    {
      title: 'Primary UI Colors',
      text: 'Primary colors of the dapulse user interface, used for all elements except for status columns.',
      colorsArray: [
        {
          colorTitle: 'Done Green',
          colorText: '',
          colorName: 'done-green',
        },
        {
          colorTitle: 'Working Orange',
          colorText: '',
          colorName: 'working-orange',
        },
        {
          colorTitle: 'Stuck Red',
          colorText: '',
          colorName: 'stuck-red',
        },
        {
          colorTitle: 'Purple',
          colorText: '',
          colorName: 'purple',
        },
        {
          colorTitle: 'Egg Yolk',
          colorText: 'Used for Done status only.',
          colorName: 'egg-yolk',
        },
        {
          colorTitle: 'Poop',
          colorText: '',
          colorName: 'poop',
        },
        {
          colorTitle: 'Dark Blue',
          colorText: '',
          colorName: 'dark-blue',
        },
        {
          colorTitle: 'Jeans',
          colorText: 'Used as shareable theme.',
          colorName: 'jeans',
        },
        {
          colorTitle: 'Grass Green',
          colorText: 'Shading for Bazooka.',
          colorName: 'grass-green',
        },
        {
          colorTitle: 'Explosive',
          colorText: '',
          colorName: 'explosive',
        },
        {
          colorTitle: 'Blackish',
          colorText: '',
          colorName: 'blackish',
        },
      ],
    },
  ],
};

export default Content;
