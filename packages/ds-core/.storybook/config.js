import { configure } from '@storybook/react';
import '@storybook/react/addons';
import '@storybook/addon-knobs/register'

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
