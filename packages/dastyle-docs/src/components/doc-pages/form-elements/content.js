const Content = [
  {
    name: 'Form Input',
    sections: [
      {
        title: 'Deafult Input Field',
        subTitle: 'Generic user input – unrestricted plain text that doesn’t require autocompletion or feedback.',
        examples: [{ ref: 'Default' }],
      },
      {
        title: 'Fixed Input',
        subTitle: 'Used when part of the input is not editable (e.g. in a team’s domain address).',
        examples: [
          { ref: 'Prefix'},
          { ref: 'Sufix'},
        ]
      },
      {
        title: 'Input Caption',
        subTitle: 'Used to display additionaol information related to the input field.',
        examples: [
          { ref: 'LeftCaption'},
          { ref: 'RightCaption'},
        ]
      },
      {
        title: 'Set Password',
        subTitle: 'An input field with a password strength indicator and paired text.',
        examples: [
          { ref: 'SetPassword'},
        ]
      },
      {
        title: 'Input With Feedback',
        subTitle: 'Input fields can have a Positive or Negative feedback.',
        examples: [
          { ref: 'InputWithFeedbackSuccess'},
          { ref: 'InputWithFeedbackAlert'},
        ]
      },
      {
        title: 'Checkbox',
        subTitle: '-',
        examples: [
          { ref: 'Checkbox'},
          { ref: 'CheckboxDisabled'},
        ]
      },
      {
        title: 'Radio Button',
        subTitle: '-',
        examples: [
          { ref: 'RadioButton'},
          { ref: 'RadioButtonDisabled'},
        ]
      },
    ],
  },
  {
    name: 'Text Area',
  }
]

export default Content;
