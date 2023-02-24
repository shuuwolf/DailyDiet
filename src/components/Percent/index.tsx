import { TouchableOpacityProps, View } from "react-native";
import { ArrowUpRight } from 'phosphor-react-native';

import { Percent_Title, Percent_subtitle, Button_Percent, StyledIcon } from './style';

export type Variant = 'inDiet' | 'outDiet';

type Props = TouchableOpacityProps & {
    value: string;
    text: string;
    variant?: Variant;
  };

export function Percent({ value, text, variant, ...rest }: Props){
    return(
        <Button_Percent variant={variant} {...rest}>
            <View style={{alignItems: 'flex-end'}}>
                {variant && <StyledIcon variant={variant} />}
                <View style={{width:'100%', alignItems:'center',paddingVertical: 8, paddingHorizontal: 16}}>
                    <Percent_Title>{value}</Percent_Title>
                    <Percent_subtitle>{text}</Percent_subtitle>
                </View>
            </View>
        </Button_Percent>
    )
}
