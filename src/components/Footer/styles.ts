import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;
export const Produtos = styled(TouchableOpacity)`
    background-color: grey;
    border-radius: 5px;
    padding:${RFValue(6)}px;
`;
export const Cadastrar = styled(TouchableOpacity)`
    background-color: grey;
    border-radius: 5px;
    padding:${RFValue(6)}px;
`;
export const Label = styled.Text`
    font-size: ${RFValue(26)}px;
`;