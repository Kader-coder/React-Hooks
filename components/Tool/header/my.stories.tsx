import * as React from 'react';
import Header from './index';

export default {
    title: 'Tool|Header',
    parameters: {
        component: Header,
        includeStories: [],
    },
};

export const Area = () => {
    const { Menu, Icon, Serch, Tool, List } = Header;

    return (
        <div>
            <Header>
                <Menu>Menu</Menu>
                <Icon>Icon</Icon>
                <Serch>Serch</Serch>
                <Tool>Tool</Tool>
                <List>List</List>
            </Header>
        </div>
    );
};

export const Lack_1 = () => {
    const { Menu, Icon, Serch, Tool } = Header;
    return (
        <div>
            <Header>
                <Menu>Menu</Menu>
                <Icon>Icon</Icon>
                <Serch>Serch</Serch>
                <Tool>Tool</Tool>
            </Header>
        </div>
    );
};
export const Lack_2 = () => {
    const { Menu, Icon, List, Tool } = Header;
    return (
        <div>
            <Header>
                <Menu>Menu</Menu>
                <Icon>Icon</Icon>
                <Tool>Tool</Tool>
                <List>Serch</List>
            </Header>
        </div>
    );
};

export const Fixed = () => {
    const { Menu, Icon, Serch, Tool, List } = Header;
    return (
        <div style={{ wordBreak: 'break-all' }}>
            <Header fixed>
                <Menu>Menu</Menu>
                <Icon>Icon</Icon>
                <Serch>Serch</Serch>
                <Tool>Tool</Tool>
                <List>List</List>
            </Header>
            JW
            {new Array(100).fill('人之初，性本善，性相近，習相遠，苟不教，性乃遷，教之道')}
        </div>
    );
};
