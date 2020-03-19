import * as React from 'react';
import classNames from 'classnames';
import './css.scss';

const Module2 = () => {
    const className = 'useState';
    const [value, setvalue] = React.useState(new Array(1).fill(0));

    return (
        <div className={classNames(className)}>
            <div>Hello {value}</div>
            <button
                onClick={() =>
                    setvalue(pre => {
                        pre.push(0);
                        return pre;
                    })
                }
            >
                +1 Item
            </button>
            <button onClick={() => setvalue(pre => [...pre])}>render</button>
        </div>
    );
};

export default Module2;
