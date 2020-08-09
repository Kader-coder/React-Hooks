import styled from 'styled-components';

export const BodySTY = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    padding: 0;

    > div {
        background-color: #0009;
        height: 200px;
    }

    &::before {
        content: '';
        grid-column-start: 1;
        grid-row: 1 / 3;
    }

    @media (max-width: 980px) {
        padding: 0 10px;
        grid-template-columns: repeat(2, 1fr);
        &::before {
            display: none;
        }
    }
`;

export default {};
