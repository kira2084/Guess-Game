import { Text,StyleSheet,Platform } from "react-native"


function Title({children}){
        
    return <Text style={styles.textContainer}>{children}</Text>
}

export default Title;

const styles=StyleSheet.create({
    textContainer:{
        fontFamily:'open-sans-bold',
        fontSize:30,
        color:"white",
        textAlign:"center",
        //fontWeight:'bold',
        marginTop:10,
        // borderWidth:3,
        borderWidth:Platform.select({ios:0,android:3}),
        borderColor:"white",
        padding:8,
        maxWidth:'80%',
        width:300,

    }
})