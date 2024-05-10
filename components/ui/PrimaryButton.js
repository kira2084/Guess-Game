import { View,Text, Pressable,StyleSheet } from "react-native";

function PrimaryButton({children,onPressed}){
   
    return(
        <View style={styles.buttonOuterContainer} >
            <Pressable
            style={({press})=>
            press?
            [styles.buttonInnerContainer,styles.pressed]
            :styles.buttonInnerContainer}
            onPress={onPressed} 
            android_ripple={{color:"#640233"}}>
                <Text style={styles.ButtonText} >{children}</Text>
            </Pressable>
        </View>
   
    ) 
}
export default PrimaryButton;

const styles=StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        overflow:"hidden",
        margin:4,
       
    },
    buttonInnerContainer:{
        backgroundColor:"#72063c",
        paddingHorizontal:16,
        paddingVertical:8,
        elevation:2,
      
    },
    ButtonText:{
        color:"white",
        textAlign:"center",
        
    },
    pressed:{
        opacity:0.75,
        
        
    }
})