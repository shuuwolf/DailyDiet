import { DietVariant } from '@screens/Initial';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Content,
  Icon,
  Separator,
  Time,
  Description,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  time: string;
  variant: DietVariant;
};

export function MealSection({ title, time, variant, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <Time>{time}</Time>
        <Separator />
        <Description>{title}</Description>
      </Content>
      <Icon variant={variant} />
    </Container>
  );
}