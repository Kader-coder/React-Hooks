import * as React from 'react';
import cx from 'classnames';
import { BodySTY, BoxSTY, ImgSTY } from './style';

export interface I_Common {
    style?: React.CSSProperties;
    className?: string;
}
interface I_Main extends I_Common, React.PropsWithChildren<{}> {
    urls?: string[];
    max?: string;
}

const Header = (props: I_Main) => {
    const { urls, className, children, ...pop } = props;
    const [Index, setIndex] = React.useState(0);

    return (
        <React.Fragment>
            <BodySTY>
                <BoxSTY className={cx('Carousel', { [className || '']: className })} {...pop}>
                    {children}
                    {urls?.map((url, index) => {
                        let name = '';
                        if (index === Index - 1) {
                            name = 'pre';
                        } else if (index < Index - 1) {
                            name = 'pre-pre';
                        } else if (index === Index + 1) {
                            name = 'next';
                        } else if (index > Index + 1) {
                            name = 'next-next';
                        }
                        return <ImgSTY url={url} className={name} key={`Carousel_Img-${index}`} />;
                    })}
                </BoxSTY>
            </BodySTY>
            <button onClick={() => setIndex(pre => (pre -= 1))}>-1</button>
            <button onClick={() => setIndex(pre => (pre += 1))}>+1</button>
        </React.Fragment>
    );
};

export default Header;
