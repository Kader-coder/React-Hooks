import styled from 'styled-components';

// 記得刪掉(暫時用)
const _STY = (color: string) => `
    background-color: ${color};
    height: 32px;
    color: #eee;
    display: grid;
    justify-items: center;
    align-items: center;
`;
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
    position: relative;
    display: grid;
    grid-template-areas: 'menu icon serch tool';
    grid-template-columns: auto 120px 1fr auto;
    grid-gap: 4px;
    padding: 4px;
    background-color: #f596aa;

    &.fixed {
        position: fixed;
        width: -webkit-fill-available;
    }

    @media ${device.mobile} {
        grid-template-areas: 'menu serch tool';
        grid-template-columns: auto 1fr auto;
    }
`;

export const MenuSTY = styled.div`
    grid-area: menu;
    padding: 0 8px;

    ${_STY('#6e552f')}
`;

export const IconSTY = styled.div`
    grid-area: icon;

    @media ${device.mobile} {
        display: none;
    }

    ${_STY('#f17c67')}
`;

export const SerchSTY = styled.div`
    grid-area: ${'serch'};

    ${_STY('#e83015')}
`;

export const ToolSTY = styled.div`
    grid-area: tool;
    padding: 0 32px;

    ${_STY('#9e7a7a')}
`;

export const ListSTY = styled.div`
    grid-column: 1/-1;

    ${_STY('#ffba84')}
`;

export default {};
