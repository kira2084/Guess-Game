import { TextInput,View ,StyleSheet, Alert,Dimensions,useWindowDimensions,KeyboardAvoidingView,ScrollView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Color from "../constants/Color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Owntext from "../components/ui/Owntext";

function StartGameScreen({onPickedNumber}){
    //maxlength={2} means only two number allowed at  max only upto 99 not greater than that
    const [enteredNumber,setEnteredNumber]=useState('');
    const {width,height}=useWindowDimensions();
    function inputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmHandler(){
        const chosenNumber=parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>=100){
            Alert.alert(
                'invalid number!',
                "Number should be number B/W 1 to 99",
                [{text:"Okay",style:"destructive",onPress:resetInputHandler}]
            );
            return ;
        }
        onPickedNumber(enteredNumber);
    }
    const marginTopDimesion=height<380?30:100;
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View>
        <View style={[styles.guessContainer,{marginTop:marginTopDimesion}]} >
            <Title>Guess My Number</Title>
        </View>
        <Card>
       <Owntext>Enter a Number</Owntext>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={inputHandler}
        />
        <View style={styles.buttonsConatiner}>
            <View style={styles.buttonConatiner}>
                <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonConatiner}>
                <PrimaryButton onPressed={confirmHandler}>Confirm</PrimaryButton>
            </View>
            
         </View>
         </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    )
}
export default StartGameScreen;
const deviceHeight=Dimensions.get('window').height;
const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    guessContainer:{
        flex:1,
        alignItems:"center",
        //marginTop:deviceHeight<380?34:100,
        
    },
    
    
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Color.accent500,
        borderBottomWidth:2,
        color:Color.accent500,
        marginVertical:8,
        //fontWeight:"bold",
        fontFamily:'open-sans-bold',
        textAlign:"center"
    },
    buttonsConatiner:{
        flexDirection:"row",
    },
    buttonConatiner:{
        flex:1,
    }
})