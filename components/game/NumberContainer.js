import { View,Text,StyleSheet,Dimensions } from "react-native";
import Color from "../../constants/Color";


function NumberContainer({children}){

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;
const deviceWidth=Dimensions.get("window").width;
const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Color.accent500,
        padding:deviceWidth<380?12: 24,
        borderRadius:8,
        margin:deviceWidth<380?12:24,
        alignItems:"center",
        justifyContent:"center"
    },
    numberText:{
        fontSize:deviceWidth<380?28:36,
        color:Color.accent500,
        //fontWeight:"bold"
        fontFamily:'open-sans-bold',

    }
})