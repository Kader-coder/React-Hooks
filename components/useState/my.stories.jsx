import * as React from 'react';
import Module1 from './Module1';
import Module2 from './Module2';

export default {
    title: 'JSX(範例)|useState',
    // parameters: {
    //     component: Module1,
    //     includeStories: [],
    // },
};

export const example_1 = () => (
    <div>
        <Module1 />
    </div>
);
export const example_2 = () => (
    <div>
        <Module2 />
    </div>
);
