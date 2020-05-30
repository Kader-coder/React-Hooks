import * as React from 'react';
import { I_Common } from '../index';
import { ListSTY } from '../style';

interface I_Data {
    name: string;
    onClick: (name: string) => void;
    child?: I_Data[];
}
interface I_List extends I_Common {
    leftList?: I_Data[];
    leftRight?: I_Data[];
}

const List: React.FC<I_List> = props => {
    const { style, children } = props;

    return <ListSTY style={style}>{children}</ListSTY>;
};

export default List;
