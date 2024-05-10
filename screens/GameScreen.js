import { View,StyleSheet,Text, Alert,FlatList,useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card";
import Owntext from "../components/ui/Owntext";
import {Foundation ,FontAwesome5} from "@expo/vector-icons"
import GuessLogItem from "../components/game/GuessLogItem";
function generateRandomNumber(min,max,exclude){
    let rndm=Math.floor(Math.random()*(max-min))+min;
    if(rndm===exclude){
        return generateRandomNumber(min,max,exclude);
    }else{
        return rndm;
    }
}
let maxboundary=100;
let minboundary=1;
function GameScreen({userNumber,gameOverHandler}){
    let initialGuess=generateRandomNumber(1,100,userNumber);
    const [currentGuess,setGuess]=useState(initialGuess);
    const [guessRounds,setGuessRounds]=useState([initialGuess]);
    const {width,height}=useWindowDimensions();
    useEffect(()=>{
        if(currentGuess==userNumber){
            gameOverHandler(guessRounds.length);
            
        }
        
    },[currentGuess,userNumber,gameOverHandler]);
    function newGuessHandler(direction){
        if((direction==='lower'&&currentGuess<userNumber)||(direction==='higher'&&currentGuess>userNumber)){
            Alert.alert(`Don't lie!`,"You know that this is wrong",[
                {text:'Sorry!',style:"cancel"},
        ])
        return;
        }
        if(direction==='lower'){
            maxboundary=currentGuess;
        }else{
            minboundary=currentGuess+1;
        }
        const newrndm=generateRandomNumber(minboundary,maxboundary,currentGuess);
        setGuess(newrndm);
        setGuessRounds(prevRound=>[newrndm,...prevRound]);
    }
    const guessRoundsLength=guessRounds.length;

    let content=(
    <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <Owntext style={styles.text} >Higher or Lower</Owntext>
            <View style={styles.buttonsConatiner}>
                <View style={styles.buttonConatiner}>
                    <PrimaryButton onPressed={newGuessHandler.bind(this,'lower')}>
                    <FontAwesome5 name="minus" size={24} color="white" /></PrimaryButton>
                </View>
                <View style={styles.buttonConatiner}>
                    <PrimaryButton onPressed={newGuessHandler.bind(this,'higher')}>
                    <Foundation name="plus" size={24} color="white" /></PrimaryButton>
                </View>
                
            </View>
        </Card>
    </>
    );
    if(width>500){
        content=(
        <>
            <View style={styles.buttonsConatinerWide}>
                <View style={styles.buttonConatiner}>
                    <PrimaryButton onPressed={newGuessHandler.bind(this,'lower')}>
                    <FontAwesome5 name="minus" size={24} color="white" /></PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonConatiner}>
                    <PrimaryButton onPressed={newGuessHandler.bind(this,'higher')}>
                    <Foundation name="plus" size={24} color="white" /></PrimaryButton>
                </View>
                
            </View>
           
        </>
        );
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/*guessRounds.map(data=><Text key={data}>{data}</Text>)*/}
                <FlatList
                data={guessRounds}
                renderItem={(itemData)=>(
                    <GuessLogItem roundNumber={guessRoundsLength-itemData.index} 
                    guess={itemData.item}/>
                )}
                keyExtractor={(item)=>item}/>
            </View>
        </View>
    )
}

export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:40,
        alignItems:'center'
    },
    buttonsConatinerWide:{
        flexDirection:"row",
        alignItems:'center'
    },
    buttonsConatiner:{
        flexDirection:"row",
    },
    buttonConatiner:{
        flex:1,
    },
    text:{
        marginBottom:16,
    },
    listContainer:{
        flex:1,
        padding:2,
        //this one we added becos in flatlist we can't able scroll so by writing flex 1 this amount space allocated scrool in that space it means
    }
})