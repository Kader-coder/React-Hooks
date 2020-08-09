import styled from 'styled-components';

// 記得刪掉(暫時用)
const size = {
    mobile: '425px',
    tablet: '980px',
    laptop: '1280px',
};
// 記得刪掉(暫時用)
const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
};

export const BodySTY = styled.div`
    overflow: hidden;
    @media ${device.mobile} {
    }
`;

export const BoxSTY = styled.div<{ max?: string }>`
    position: relative;
    max-width: ${({ max }) => max};
    margin: auto;
    height: 200px;
    width: 100%;

    @media ${device.mobile} {
    }
`;

export const ImgSTY = styled.div<{ url: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${({ url }) => url});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    transition-duration: 0.4s;
    left: 0%;
    z-index: 0;

    &.pre-pre {
        left: -200%;
    }
    &.pre {
        left: -100%;
    }
    &.next {
        left: 100%;
    }
    &.next-next {
        left: 200%;
    }
    &.null {
        z-index: -1;
    }
    @media ${device.mobile} {
    }
`;
export default {};
