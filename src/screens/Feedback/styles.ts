import styled, { css } from 'styled-components/native';
import { Image, ImageProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DietVariant } from '@screens/Initial';

type Props = {
  variant: DietVariant;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Heading = styled.Text<Props>`
  ${({ theme, variant }) => css`
    color: ${variant === 'inDiet'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
  margin-bottom: 8px;
`;

export const SubHeading = styled.View``;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  text-align: center;
`;

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const StyledImage = styled(Image as new (props: ImageProps) => Image)`
  margin: 40px auto 32px;
`;