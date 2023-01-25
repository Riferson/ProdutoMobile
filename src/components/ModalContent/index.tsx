import React from "react";
import {Container,Title,SubTitle,Comfirm,Cancel,Label,ButtonArea} from './styles';

interface props{
    id:number;
    modalClose:()=> void;
}

export function ModalContent({id,modalClose}:props){
    return(
        <Container>
            <Title>Atenção</Title>
            <SubTitle>Confirmar a exclusão do produto?</SubTitle>
            <ButtonArea>
                <Comfirm><Label>Comfirmar</Label></Comfirm>
                <Cancel onPress={modalClose}><Label>Cancelar</Label></Cancel>
            </ButtonArea>
        </Container>
    );
}