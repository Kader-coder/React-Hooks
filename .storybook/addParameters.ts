import { addParameters } from '@storybook/react'; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: 'default', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced', },
    { name: 'facebook', value: '#3b5998' },
  ],
});