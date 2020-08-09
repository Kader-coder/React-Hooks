import * as React from 'react';
import { BodySTY } from './style';

export interface I_Common {
    style?: React.CSSProperties;
    className?: string;
}
interface I_Main extends I_Common, React.PropsWithChildren<{}> {
    fixed?: boolean;
}

const CardList = (props: I_Main) => {
    const { style, children } = props;

    return (
        <React.Fragment>
            <BodySTY style={style}>{children}</BodySTY>
        </React.Fragment>
    );
};

export default CardList;
