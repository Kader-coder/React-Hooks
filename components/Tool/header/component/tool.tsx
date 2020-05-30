import * as React from 'react';
import { I_Common } from '../index';
import { ToolSTY } from '../style';

interface I_Tool extends I_Common {
    avatar?: string;
}

const Tool: React.FC<I_Tool> = props => {
    const { style, children } = props;

    return <ToolSTY style={style}>{children}</ToolSTY>;
};

export default Tool;
