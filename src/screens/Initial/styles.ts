import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
`

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Perfil_logo = styled.Image`
    width: 40px;
    height: 40px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ListMeal = styled.View`
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
    padding: 14px 16px 14px 12px;
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
`;

export const DateTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;