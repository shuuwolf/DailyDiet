import { DietVariant } from '@screens/Initial';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  variant: DietVariant;
};

export const Container = styled(
  TouchableOpacity as new (props: TouchableOpacityProps) => TouchableOpacity
)`
  width: 100%;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS};
  `}
`;

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Icon = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, variant }) =>
    variant === 'inDiet' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;