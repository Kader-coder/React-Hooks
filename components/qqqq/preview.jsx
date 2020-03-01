import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';

import { withKnobs } from '@storybook/addon-knobs';
storiesOf('asd', module)
    .addDecorator(withKnobs)
    .add('bt_bsic', () => {
        return (
            <div>
                <Module />
                <div>我是主角</div>
            </div>
        );
    });
