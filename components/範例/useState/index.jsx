import * as React from 'react';
import classNames from 'classnames';
import './css.scss';

const Module = () => {
    const className = 'useState';
    const [value, setvalue] = React.useState(0);

    return (
        <div className={classNames(className)}>
            <div>Hello {value}</div>
            <button onClick={() => setvalue(pre => pre + 1)}>+1</button>
            <button onClick={() => setvalue(pre => pre - 1)}>-1</button>
        </div>
    );
};

export default Module;
