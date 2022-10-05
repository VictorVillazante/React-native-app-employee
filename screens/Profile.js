import { LinearGradient } from "expo-linear-gradient";
import React,{useState} from "react";
import { StyleSheet,View,Image, Text,Linking,Platform} from "react-native";
import { Button, Card, Title } from "react-native-paper";
import { MaterialIcons,Entypo } from '@expo/vector-icons'; 

const Profile=()=>{
    const openDialog=()=>{
        if(Platform.OS=="android"){
            Linking.openURL("tel:12345")
        }else{
            Linking.openURL("telprompt:12345")
        }
    }
    return (
        <View style={styles.root}> 
            <LinearGradient
                colors={["#ffffff","#bde0fe"]}
                style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}> 
                <Image
                    style={{borderRadius:30,width:100,height:100,marginTop:-40}}
                    source={{uri:"https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"}}
                />
            </View> 
            
            <View style={{alignItems:"center"}}> 
                <Title> 
                    Juan Paredes
                </Title>
                <Text> 
                    Juan Paredes
                </Text>    
            </View> 
            <Card style={styles.card_style} onPress={()=>{Linking.openURL("mailto:abc@abc.com")}}> 
                <View style={styles.flex_view}>  
                    <MaterialIcons name="email" size={24} color="black" />
                    <Text style={styles.text_style}> 
                        Juan Paredes
                    </Text>  
                </View>    
            </Card>
            <Card style={styles.card_style} onPress={()=>{openDialog()}}> 
                <View style={styles.flex_view}> 
                    <Entypo name="phone" size={24} color="black" />
                    <Text style={styles.text_style}> 
                        123456
                    </Text>
                </View>    
            </Card>
            <Card style={styles.card_style}> 
                <View style={styles.flex_view}> 
                    <MaterialIcons name="attach-money" size={24} color="black" />
                    <Text style={styles.text_style}> 
                        8 LPA
                    </Text>   
                </View>    
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:5}}> 
                <Button theme={theme} icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}>
                    Edit
                </Button>
                <Button theme={theme} icon="delete" mode="contained" onPress={() => console.log('Pressed')}>
                    Delete
                </Button>
            </View> 
        </View> 
    );
}
const theme={
    colors:{
        primary:"#5faaff"
    }
}
const styles=StyleSheet.create(
    {
        root:{
            flex:1
        },
        card_style:{
            margin:5
        },
        flex_view:{
            flexDirection:"row"
        },
        text_style:{
            fontSize:15
        }
    }
)
export default Profile;