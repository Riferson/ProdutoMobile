import React from "react";
import { ProductsDTO } from "../../dtos/ProductsDTO";
import noImage from '../../images/no-image.png';


import {Container,ProductImage,ProductDescription,ProductName,ProductValue,ProductResulmDescription} from './styles';

interface Props{
    data:ProductsDTO;
    handleDescriptionProduct:()=>void;
}

export function ProductCard({data,handleDescriptionProduct}:Props){
    return(
        <Container onPress={handleDescriptionProduct}>
            <ProductImage source={noImage}/>
            <ProductDescription>
                <ProductName>{data.nome}</ProductName>
                <ProductValue>{data.preco}</ProductValue>
                <ProductResulmDescription>{data.descricao}</ProductResulmDescription>
            </ProductDescription>
        </Container>
    );
}