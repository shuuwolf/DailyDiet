import { DietVariant } from '@screens/Initial';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  variant?: DietVariant;
};

export const Container = styled.View<Props>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, variant }) =>
    variant
      ? variant === 'inDiet'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_500};
  padding: 33px 24px;
`;

export const IconContainer = styled(
  TouchableOpacity as new (props: TouchableOpacityProps) => TouchableOpacity
)`
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    margin: 0 auto;
  `}
`;