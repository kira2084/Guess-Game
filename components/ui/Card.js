import {View,StyleSheet,Dimensions} from "react-native"
import Color from "../../constants/Color";
function Card({children}){

    return <View style={styles.inputconatiner}>{children}</View>
}
export default Card;
const deviceWidth=Dimensions.get("window").width;
const styles=StyleSheet.create({
    inputconatiner:{
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:24,
        marginTop:deviceWidth<380?18:36,
        padding:16,
        backgroundColor:Color.Primary400,
        borderRadius:8,
        elevation:4,
    },
})