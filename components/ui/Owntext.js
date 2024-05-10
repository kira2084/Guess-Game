import {Text,StyleSheet} from "react-native"
import Color from "../../constants/Color"
function Owntext({children,style}){

    return  <Text style={[styles.text,style]}>{children}</Text>
}
export default Owntext;

const styles=StyleSheet.create({
    text:{
        color:Color.accent500,
        fontSize:28,
        fontFamily:'open-sans',
    },
})