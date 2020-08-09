import * as React from 'react';
import CardList from './index';

export default {
    title: 'Tool|cardList',
    parameters: {
        component: CardList,
        includeStories: [],
    },
};

export const Area = () => {
    return (
        <div>
            <CardList>{new Array(6).fill(<div />)}</CardList>
        </div>
    );
};
