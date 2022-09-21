import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 66px;
    height: 24px;
`;

export const Profile =  styled.View`
    width: 40px;
    height: 40px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};

    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 50%;
`;