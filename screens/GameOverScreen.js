import { View,Image,StyleSheet,Text,Dimensions,useWindowDimensions,ScrollView} from "react-native";

import Color from "../constants/Color";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({noRounds,userNumber,startNewGame}){
    const {width,height}=useWindowDimensions();

    let imageSize=300;
    if(width<380){
        imageSize=180;
    }
    if(height<400){
        imageSize=100;
    }

    const imageStyle={
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize/2,
    }
    return(
        <ScrollView style={styles.screen}>
        <View style={styles.mainContainer} >
            <Title>GAME OVER!</Title>
            <View style={[styles.imageConatiner,imageStyle]}>
                 <Image 
                source={require("../assets/Images/success.png")}
                style={styles.image}
                />
            </View>
            <View style={styles.textmain}>
                <Text style={styles.summary}>Your phone needed 
                    <Text style={styles.highlight}> {noRounds} </Text> 
                    rounds to guess the number 
                    <Text style={styles.highlight}> {userNumber}</Text>.</Text>
                <PrimaryButton onPressed={startNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
        </ScrollView>
    )
}
export default GameOverScreen;
const deviceWidth=Dimensions.get("window").width;
const styles=StyleSheet.create({
    screen:{
        flex:1,
    },
    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:24,
        marginTop:26
    },
    imageConatiner:{
    //    borderRadius:deviceWidth<380?75: 150,
    //    height:deviceWidth<380?150: 300,
    //    width:deviceWidth<380?150: 300,
       borderWidth:3,
       borderColor:Color.Primary400,
       overflow:"hidden",
       margin:36,
       alignItems:"center",
        
       

    },
    image:{
        width:"100%",
        height:"100%",
    },
   
    summary:{
        fontFamily:"open-sans",
        fontSize:24,
        textAlign:'center',
        marginVertical:24,

    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Color.Primary400,
    }
})