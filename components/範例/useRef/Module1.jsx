import * as React from 'react';
import classNames from 'classnames';
import './css.scss';

const Module1 = () => {
    const className = 'useState';
    const InputRef = React.useRef('');
    const [value, setvalue] = React.useState('');

    return (
        <div className={classNames(className)}>
            <div>Hello {value}</div>
            <input ref={InputRef}></input>
            <button onClick={() => setvalue(InputRef.current.value)}>Submit</button>
        </div>
    );
};

export default Module1;
