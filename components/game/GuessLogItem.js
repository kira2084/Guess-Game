import { View,Text,StyleSheet } from "react-native";
import Color from "../../constants/Color";


function GuessLogItem({roundNumber,guess}){
    return(
        <View style={styles.listItem}>
            <Text style={styles.itemtext}>#{roundNumber}</Text>
            <Text style={styles.itemtext}>Oppenent's Guess:{guess}</Text>
        </View>
    );
}
export default GuessLogItem;

const styles=StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderRadius:40,
        marginVertical:8,
        borderColor:Color.Primary400,
        padding:12,
        backgroundColor:Color.accent500,
        flexDirection:'row',
        justifyContent:"space-between",
        width:"100%",
        elevation:4,

    },
    itemtext:{
        fontFamily:'open-sans'
    }
})