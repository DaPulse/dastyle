import primaryImg from './img/primary.svg';
import secondaryImg from './img/secondary.png';

const Content = {
  'Standard Buttons': [
    {
      title: 'Primary Button',
      text: 'Default for calls to action and other primary interactions that mus be visually prominent',
      buttonLayoutName: 'primary',
      statesText: [
        ['Active', 'Type #FFFFFF // Background #0FA2E2'],
        ['Hover', 'Type #FFFFFF // Background #0086C3'],
        ['Select', 'Type #FFFFFF // Background #0073A8'],
        ['Disabled', 'Type #C4C4C4 // Background #F7F7F7'],
      ],
      cssCode: [
        '<button class=“button—large”>Large</button>',
        '<button class=“button—normal”>Medium</button>',
        '<button class=“button—small”>Small</button>',
        '<button class=“button—disabled”>Disabled</button>',
      ],
      reactCode: [
        '<Button color="primary" size="lg">Large</Button>',
        '<Button color="primary">Medium</Button>',
        '<Button color="primary" size="sm">Small</Button>',
        '<Button color="primary" disabled>Disabled</Button>',
      ],
      imgPath: { primaryImg },
    },
    {
      title: 'Secondary Button',
      text: 'Not all buttons were created equal – when displaying two buttons side by side, the less important of the two will be displayed as a link, without background or border.',
      buttonLayoutName: 'secondary',
      statesText: [
        ['Secondary Button', 'Active #C4C4C4 // Hover #999999 // Select #808080'],

      ],
      cssCode: [
        '<button class=“button—lowhirarchy”>Secondary</button>',
      ],
      reactCode: [
        '<Button color="secondary" >Secondary</Button>',
      ],
      imgPath: { secondaryImg },
    },
    {
      title: 'States',
      text: 'Buttons can be used to seitch between states. State A is the initial action we wish to encourage the user to do (e.g. join a board); State B is the opposite action and will revert back to the original state (e.g. unsubscribe from a board)',
      buttonLayoutName: 'secondary',
      statesText: [
        ['Secondary Button', 'Active #C4C4C4 // Hover #999999 // Select #808080'],

      ],
      cssCode: [
        '<button class=“button state-active”>Active</button>',
        '<button class=“button state-inactive>Inactive</button>',
      ],
      reactCode: [
        '<Button color="secondary" >Secondary</Button>',
      ],
      imgPath: { secondaryImg },
    },
  ],
};

export default Content;
