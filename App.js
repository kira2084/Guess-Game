import { ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Color from './constants/Color';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  //lineargradient is used to set multiple colors atleat 2
  const [userNumber,setUserNumber]=useState();
  const [gameOver,setGameover]=useState(true);
  const [guessRound,setGuessRound]=useState(0);
  const [fontLoading]=useFonts({
    'open-sans-bold':require("./assets/fonts/OpenSans-Bold.ttf"),
    'open-sans':require("./assets/fonts/OpenSans-Regular.ttf"),
  })
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameover(false);
  }
  function gameOverHandler(numberOfRounds){
    setGameover(true);
    setGuessRound(numberOfRounds);
  }
 function newGame(){
    setUserNumber(null);
    setGuessRound(0);
 }
  let screen=<StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if(!fontLoading){
    return <AppLoading/>
  }
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler}/>
  }
 
  if(gameOver && userNumber){
    screen=<GameOverScreen userNumber={userNumber} noRounds={guessRound} startNewGame={newGame}/>
  }
  return (
    
    <LinearGradient colors={[Color.Primary200,Color.accent500]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/Images/background.png')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.imagebackground}>
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
      
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
   
    flex:1,  
  },
  imagebackground:{
    opacity:0.15,
  }
});
