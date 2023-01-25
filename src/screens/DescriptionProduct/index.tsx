import React, { useState } from "react";
import { Modal } from "react-native";
import { ModalContent } from "../../components/ModalContent";
import noImage from '../../images/no-image.png';

import {Container,Title,Content,ProductInfo,ImageProduct,ProductValue,ProductDescription,ButtonContent,Edit,Remove,Label, DescriptionArea,ModalArea} from './styles';

export function DescriptionProduct(){
    const [modalVisible, setModalVisible] = useState(false);
    const [id,setId] = useState(1);

    function handleModalOpen(){
        setModalVisible(true);
    }
    function handleModalClose(){
        setModalVisible(false);
    }
    return(
        <Container>
            <Title>Produto 1</Title>
            <Content>
                <ProductInfo>
                    <ImageProduct source={noImage}/>
                    <ProductValue>Valor:R$23,50</ProductValue>
                </ProductInfo>
                <DescriptionArea>
                    <ProductDescription>DescriçãoDescri DescriçãoDescriDescriçãoDescriDescriçãoDescriDescriçãoDescriDescriçãoDescriDescriçãoDescriDescriçãoDescriDescriçãoDescriDescriçãoDescriDescriçãoDescr</ProductDescription>
                </DescriptionArea>
            </Content>
            <ButtonContent>
                <Edit><Label>Editar</Label></Edit>
                <Remove onPress={handleModalOpen}><Label>Remover</Label></Remove>
            </ButtonContent>
            <ModalArea>
                <Modal visible={modalVisible}  transparent={true}>
                    <ModalContent modalClose={handleModalClose} id={id}/>
                </Modal>
            </ModalArea>
        </Container>
    );
}