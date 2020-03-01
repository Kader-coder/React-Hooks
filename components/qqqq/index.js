import * as React from 'react';
import classNames from 'classnames';
// import { Mode } from '../';
// import Ic_xicn from '@components/ic_xicn/';
import './css.scss';

const Module = () => {
    const [value, setvalue] = React.useState('asda');
    return <div className={classNames('asd')}>{value}</div>;
};
export default Module;
