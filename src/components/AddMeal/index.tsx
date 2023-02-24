import {Plus} from 'phosphor-react-native';

import { Container, Title, Button, TextButton} from './styles';

interface Props {
    title: string;
    handleCreateMeal: () => void;
}

export function AddMeal({title, handleCreateMeal}: Props){
    return(
        <Container>
            <Title>{title}</Title>
            <Button onPress={handleCreateMeal}>
                <Plus 
                    size={18}
                    color="#FFF"
                    style={{marginRight: 12}}
                />
                <TextButton>Nova refeição</TextButton>
            </Button>
        </Container>
    )
}