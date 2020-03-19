import * as React from 'react';
import classNames from 'classnames';
import './css.scss';

const themes = {
    foreground: '#000000',
    background: '#eeeeee',
};

const ThemeContext = React.createContext(themes);

function Module1() {
    const className = 'useEffect1';

    return (
        <div className={classNames(className)}>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = React.useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
    );
}

export default Module1;
