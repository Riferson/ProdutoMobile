import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import {Container,Title,Search,ProductList} from './styles';
import noImage from '../../images/no-image.png';
import { ProductsDTO } from "../../dtos/ProductsDTO";
import { api } from "../../services/api";

export function Produtos(){

    const [listProducts,setListProducts] = useState<ProductsDTO[]>([]);
    const [loading,setLoading] = useState<Boolean>(true);
    function handle(){
        console.log('teste');
    }
    
    useEffect(()=>{
        async function fetchProducts(){
            try {
                const response = await api.get('/Produto');
                setListProducts(response.data);
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);
    
    return(
        <Container>
            <Title>Produtos</Title>
            <Search></Search>
            <ProductList data={listProducts}
                renderItem={({item})=><ProductCard data={item} onPress={handle}/>} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:16}}
            />
        </Container>
    );
}