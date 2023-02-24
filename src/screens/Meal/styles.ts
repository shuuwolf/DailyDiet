import { DietVariant } from '@screens/Initial';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

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

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  padding: 33px 24px;
  align-items: flex-start;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 24px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 24px;
`;

export const Diet = styled.View`
  padding: 8px 16px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, variant }) =>
    variant === 'inDiet'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-left: 8px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 33px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;