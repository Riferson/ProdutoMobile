import React from "react";

import {Container,Title,ProductForm,ProductInput,Label,SaveProduct,LabelButton} from './styles';

export function RegisterChangeProduct(){
    return(
        <Container>
            <Title>Cadastro / Alteração</Title>
            <ProductForm>
                <Label>Produto</Label>
                <ProductInput/>
                <Label>Valor(R$)</Label>
                <ProductInput/>
                <Label>Descrição</Label>
                <ProductInput/>
                <ProductInput/>
            </ProductForm>
            <SaveProduct><LabelButton>Salvar</LabelButton></SaveProduct>
        </Container>
    );
}