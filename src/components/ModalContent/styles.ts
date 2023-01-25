import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    margin-top:${RFPercentage(30)};
    height: ${RFPercentage(30)};
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: grey;
    border-radius: 10px;
`;

export const ButtonArea=styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-left: 16px;
`;
export const Title = styled.Text`

`;
export const SubTitle = styled.Text`

`;


export const Comfirm = styled.TouchableOpacity`
    background-color: ${theme.colors.gren};
    width: ${RFValue(128)}px;
    height: ${RFValue(64)}px;
    text-align: center;
    justify-content: center;
    border-radius: 5px;
    margin-right: ${RFValue(32)}px ;
`;

export const Cancel = styled.TouchableOpacity`
    background-color: ${theme.colors.yellow};
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