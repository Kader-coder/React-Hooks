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

const { Provider, Consumer } = React.createContext(themes.light);

function Module2() {
    const className = 'useEffect2';

    return (
        <div className={classNames(className)}>
            <Provider value={themes.dark}>
                <ThemedButton />
            </Provider>
        </div>
    );
}

function ThemedButton() {
    return (
        <Consumer>
            {theme => (
                <button style={{ background: theme.background, color: theme.foreground }}>
                    I am styled by theme context!
                </button>
            )}
        </Consumer>
    );
}

export default Module2;
