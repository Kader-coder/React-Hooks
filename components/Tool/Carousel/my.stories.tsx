import * as React from 'react';
import Carousel from './index';

export default {
    title: 'Tool|Carousel',
    parameters: {
        component: Carousel,
        includeStories: [],
    },
};

export const common = () => {
    return (
        <div>
            <Carousel
                urls={[
                    'https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
                    'https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    'https://images.unsplash.com/photo-1596462527470-c3e0730845b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
                    'https://images.unsplash.com/photo-1596685106095-1a6089efc4db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1185&q=80',
                    'https://images.unsplash.com/photo-1506808541308-577f3be75bb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80',
                ]}
                max="400px"
            />
        </div>
    );
};
