import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";


export const Container = styled.View`
    height: ${RFPercentage(100)};
    padding-top: ${RFPercentage(10)};
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(32)}px;

`;

export const Content = styled.View`

`;

export const ProductInfo = styled.View`
    flex-direction: row;
    padding:${RFValue(16)}px;
    justify-content:space-around;
`;

export const ImageProduct = styled.Image`
    width: ${RFValue(128)}px;;
    height: ${RFValue(128)}px;
`;

export const ProductValue = styled.Text``;

export const ProductDescription = styled.Text`
    margin: 0 ${RFValue(10)}px;
`;

export const ButtonContent = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: ${RFValue(50)}px;
`;

export const Edit = styled.TouchableOpacity`
    background-color: ${theme.colors.blue};
    width: ${RFValue(128)}px;
    height: ${RFValue(64)}px;
    text-align: center;
    justify-content: center;
    border-radius: 5px;
`;

export const Remove = styled.TouchableOpacity`
    background-color: ${theme.colors.red};
    width: ${RFValue(128)}px;
    height: ${RFValue(64)}px;
    text-align: center;
    justify-content: center;
    border-radius: 5px;
    padding: ${RFValue(10)}px;
`;

export const Label = styled.Text`
    font-size:${RFValue(16)}px ;
    text-align: center;
`;

export const DescriptionArea = styled.ScrollView.attrs({
    contentContainerStyle:{
        padding: 24,alignItems:'center'
    },
    showsVerticalScrollIndicator:false,
})`
    height:${RFValue(250)}px;
`; 

export const ModalArea = styled.View`
background-color: red;
    margin: ${RFValue(300)}px 0;
`;