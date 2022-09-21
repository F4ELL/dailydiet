import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 136px;
    max-height: 136px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };

    border-radius: 8px;

    justify-content: center;
    align-items: center;

    margin: 32px 0;
`;

export const Title = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}    
`;

export const Subtitle = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}    
`;