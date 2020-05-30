import * as React from 'react';
import { I_Common } from '../index';
import { SerchSTY } from '../style';

interface I_Serch extends I_Common {
    onCallback?: (e: string) => any;
}

const Serch: React.FC<I_Serch> = props => {
    const { style, children } = props;

    return <SerchSTY style={style}>{children}</SerchSTY>;
};

export default Serch;
