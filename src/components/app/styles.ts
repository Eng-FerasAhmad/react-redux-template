import styled from 'styled-components';
import { device } from 'style/screenSize';
import { pixelToRem } from 'utils/common';

export const AppContainer = styled.div`
    width: fit-content;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    line-height: ${pixelToRem(38)};

    @media ${device.mobile} {
        font-size: ${pixelToRem(26)};
    }

    @media ${device.tablet} {
        font-size: ${pixelToRem(36)};
    }

    @media ${device.desktop} {
        font-size: ${pixelToRem(36)};
    }
`;
