import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    
`;
export const ProductImage = styled.Image`
    width: ${RFValue(64)}px;
    height: ${RFValue(64)}px;
    margin: ${RFValue(16)}px;
`;
export const ProductDescription = styled.View`
    margin: ${RFValue(16)}px;
`;
export const ProductName = styled.Text`

`;
export const ProductValue = styled.Text`

`;
export const ProductResulmDescription = styled.Text`

`;