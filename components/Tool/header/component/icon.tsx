import * as React from 'react';
import { I_Common } from '../index';
import { IconSTY } from '../style';

interface I_Icon extends I_Common {
    url?: string;
}

const Icon: React.FC<I_Icon> = props => {
    const { style, children } = props;

    return <IconSTY style={style}>{children}</IconSTY>;
};

export default Icon;
