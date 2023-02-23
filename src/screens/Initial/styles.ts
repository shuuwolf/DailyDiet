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