import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import './addParameters';

addDecorator(withKnobs);
configure([require.context('../components', true, /\.stories\.[jt](s|sx)$/)], module);