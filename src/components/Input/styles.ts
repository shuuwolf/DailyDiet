import styled, { css } from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

type Props = {
  twoColumns: boolean;
  withLeftMargin: boolean;
};

type CustomInputProps = {
  isFilled: boolean;
  isFocused: boolean;
};

export const Container = styled.View<Props>`
  ${({ twoColumns, withLeftMargin }) => css`
    flex: ${twoColumns ? 1 : 'none'};
    margin-left: ${withLeftMargin ? '24px' : 0};
  `}
  margin-bottom: 24px;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 8px;
`;

export const StyledTextInput = styled(
  TextInput as new (props: TextInputProps & CustomInputProps) => TextInput
)`
border-radius: 6px;
padding: 16px;
  ${({ theme, isFilled, isFocused }) => css`
    border: 1px solid
      ${isFocused
        ? isFilled
          ? theme.COLORS.GRAY_500
          : theme.COLORS.GRAY_300
        : theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;