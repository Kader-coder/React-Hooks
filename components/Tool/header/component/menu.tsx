import * as React from 'react';
import { I_Common } from '../index';
import { MenuSTY } from '../style';

interface I_Data {
    name: string;
    onClick: (name: string) => void;
    child?: I_Data[];
}
interface I_Menu extends I_Common {
    data?: I_Data;
}

const Menu: React.FC<I_Menu> = props => {
    const { style, children } = props;

    return <MenuSTY style={style}>{children}</MenuSTY>;
};

export default Menu;
