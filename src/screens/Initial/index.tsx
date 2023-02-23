import { TouchableOpacity, Text, View } from 'react-native';


import logo from "@assets/Logo.png";
import elipse from "@assets/Ellipse.png";
import { Container, Logo, Perfil_logo, Header } from './styles';
import styled from 'styled-components/native';

export function Initial(){
    return(
        <Container>
            <Header>
                <Logo source={logo}/>
                <TouchableOpacity>
                    <Perfil_logo source={elipse}/>
                </TouchableOpacity>
            </Header>

            
        </Container>
    )
}