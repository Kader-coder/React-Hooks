import * as React from 'react';
import classNames from 'classnames';
import './css.scss';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(themes.light);

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
