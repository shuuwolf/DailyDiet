import { DietVariant } from '@screens/Initial';
import styled, { css } from 'styled-components/native';

type Props = {
  variant?: DietVariant;
};

export const Container = styled.View<Props>`
  ${({ theme, variant }) => css`
    background-color: ${variant
      ? variant === 'inDiet'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
    flex: ${!!variant ? 1 : 'none'};
    margin-left: ${variant === 'outDiet' ? '12px' : 0};
  `}
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const StyledNumber = styled.Text`
  margin-bottom:8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StyledText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align: center
`;