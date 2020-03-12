import * as React from 'react';
import classNames from 'classnames';
import './css.scss';

const Module1 = () => {
    const className = 'useEffect1';

    const [value, setvalue] = React.useState(null);
    const prevScrollY = React.useRef(0);

    const _Scroll = () => {
        const currentScrollY = window.scrollY;

        if (prevScrollY.current < currentScrollY) {
            setvalue(false);
        }
        if (prevScrollY.current > currentScrollY) {
            setvalue(true);
        }

        prevScrollY.current = currentScrollY;
    };

    React.useEffect(() => {
        document.addEventListener('scroll', _Scroll);
        return () => {
            document.removeEventListener('scroll', _Scroll);
        };
    }, []);

    return (
        <div className={classNames(className)}>
            <div>{value === null ? 'scroll~' : value ? 'Up' : 'Down'}</div>
        </div>
    );
};

export default Module1;
