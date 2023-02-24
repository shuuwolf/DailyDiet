import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 40px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-weight: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 8px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TextButton = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;