import * as React from 'react';
import Toggle from './Module1';

export default {
    title: 'JSX(範例)|Pattern',
    // parameters: {
    //     component: Module1,
    //     includeStories: [],
    // },
};

export const example_1 = () => (
    <div>
        <Toggle>
            <Toggle.On>
                <div>ON</div>
            </Toggle.On>
            <Toggle.Off>
                <div>OFF</div>
            </Toggle.Off>
        </Toggle>
    </div>
);

import Close from './image/Close.png';
import Open from './image/Open.png';

export const example_2 = () => (
    <div>
        <Toggle>
            <Toggle.On>
                <img src={Close} />
            </Toggle.On>
            <Toggle.Off>
                <img src={Open} />
            </Toggle.Off>
        </Toggle>
    </div>
);
