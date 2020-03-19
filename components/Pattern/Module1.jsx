import * as React from 'react';
import classNames from 'classnames';
import './css.scss';
import off from './image/OFF.png';
import on from './image/ON.png';

const Context = React.createContext();

const Toggle = props => {
    const className = 'Pattern';
    const { children } = props;
    const [value, setvalue] = React.useState(false);
    return (
        <div className={classNames(className)}>
            <Context.Provider value={{ value: value }}>
                <img src={value ? on : off}></img>
                <button onClick={() => setvalue(pre => !pre)}>{children}</button>
            </Context.Provider>
        </div>
    );
};

const On = props => {
    const Prov = React.useContext(Context);
    const { children } = props;
    return <React.Fragment>{!Prov.value && children}</React.Fragment>;
};

const Off = props => {
    const Prov = React.useContext(Context);
    const { children } = props;
    return <React.Fragment>{Prov.value && children}</React.Fragment>;
};

Toggle.On = On;
Toggle.Off = Off;
export default Toggle;
