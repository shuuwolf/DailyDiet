import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { Variant } from ".";

type Props = {
  variant?: Variant;
};

export const Percent_Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const Percent_subtitle = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const Button_Percent = styled(
    TouchableOpacity as new (props: TouchableOpacityProps) => TouchableOpacity
  )<Props>`
    position: relative;
    margin-top: 32px;
    justify-content: center;
    border-radius: 8px;

    padding: 20px 16px;
    background-color: ${({ theme, variant }) =>
    variant
      ? variant === 'inDiet'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
`;

export const StyledIcon = styled(ArrowUpRight).attrs<Props>(
    ({ theme, variant }) => ({
      size: 24,
      color:
        variant === 'inDiet'
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK,
    })
  )<Props>`
    position: absolute;
    top: 0;
  `;