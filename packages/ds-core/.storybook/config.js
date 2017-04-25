import { configure } from '@kadira/storybook';
import '@kadira/storybook/addons';
import '@kadira/storybook-addon-knobs/register'

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
