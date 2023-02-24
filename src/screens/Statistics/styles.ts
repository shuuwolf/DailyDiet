import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { DietVariant } from '@screens/Initial';

type Props = {
  variant: DietVariant;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, variant }) =>
    variant === 'inDiet'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View<Props>`
  position: relative;
  width: 100%;
  height: 168px;
  background-color: ${({ theme, variant }) =>
    variant === 'inDiet'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled(
  TouchableOpacity as new (props: TouchableOpacityProps) => TouchableOpacity
)`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const StyledIcon = styled(ArrowLeft).attrs<Props>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === 'inDiet'
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
  })
)<Props>``;

export const StyledNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StyledText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 33px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 23px;
  text-align: center;
`;

export const BoxesContainer = styled.View`
  flex-direction: row;
`;