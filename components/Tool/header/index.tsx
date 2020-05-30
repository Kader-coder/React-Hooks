import * as React from 'react';
import cx from 'classnames';
import { BodySTY } from './style';

export interface I_Common {
    style?: React.CSSProperties;
    className?: string;
}
interface I_Main extends I_Common, React.PropsWithChildren<{}> {
    fixed?: boolean;
}

const Header = (props: I_Main) => {
    const { fixed, style, children } = props;

    const bodyRef = React.useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = React.useState(false);

    const _Scroll = () => {
        const bodyHeight = bodyRef.current?.offsetHeight || 0;
        const screenScrollY = window.scrollY;

        if (bodyHeight < screenScrollY) {
            !scroll && setScroll(true);
        } else {
            setScroll(false);
        }
    };

    React.useEffect(() => {
        if (fixed) {
            document.addEventListener('scroll', _Scroll);
            return () => {
                document.removeEventListener('scroll', _Scroll);
            };
        }
    }, []);

    return (
        <React.Fragment>
            <BodySTY className={cx({ fixed: scroll })} style={style} ref={bodyRef}>
                {children}
            </BodySTY>
            {scroll && <div style={{ height: `${bodyRef.current?.offsetHeight || 0}px` }} />}
        </React.Fragment>
    );
};

import Menu from './component/menu';
import Icon from './component/icon';
import Serch from './component/serch';
import List from './component/list';
import Tool from './component/tool';
Header.Menu = Menu;
Header.Icon = Icon;
Header.Serch = Serch;
Header.Tool = Tool;
Header.List = List;

export default Header;
