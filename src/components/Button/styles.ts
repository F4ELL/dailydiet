import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;

    min-height: 50px;
    max-height: 50px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700 };
    
    border: ${({ theme }) => theme.COLORS_GRAY_200 };
    border-radius: 6px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`        
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100 };        
    `};
`;