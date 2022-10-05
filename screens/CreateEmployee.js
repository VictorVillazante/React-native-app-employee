import React,{useState} from "react";
import { Alert, StyleSheet,View} from "react-native";
import { Modal, TextInput ,Button, DataTable} from 'react-native-paper';
import { Portal, Text, Provider } from 'react-native-paper';
//Image picker
import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
import * as  Permissions from "expo-permissions";
const CreateEmployee=()=>{
    const [Name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [salary,setSalary]=useState("")
    const [picture,setPicture]=useState("")
    const [modal,setModal]=useState(false)
    const [visible, setVisible] = React.useState(false);
    const pickFromGallery=async()=>{
        const {granted}=await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data=await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newFile={
                    uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile);
            }        }else{
            Alert.alert("You don't give me permission for open your gallery");
        }
    }
    const pickFromCamera=async()=>{
        const {granted}=await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data=await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newFile={
                    uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile);
            }
        }else{
            Alert.alert("You don't give me permission for open your gallery");
        }
    }
    const handleUpload=(image)=>{
        console.log(image)
        const data=new FormData()
        data.append('file',image);
        data.append('upload_preset','employeeApp');
        data.append('cloud_name','dppsjuufc');
        fetch("https://api.cloudinary.com/v1_1/dppsjuufc/image/upload/",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            setPicture(data.uri);
            setModal(false);    
        })
    };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height:500};
    return(
        <Provider style={styles.root}> 
            <TextInput
                label="Name"
                value={Name}
                mode="outlined"
                theme={theme}
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Email"
                value={email}
                mode="outlined"
                theme={theme}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Phone"
                value={phone}
                mode="outlined"
                theme={theme}
                keyboardType="number-pad"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label="Salary"
                value={salary}
                mode="outlined"
                theme={theme}
                onChangeText={text => setSalary(text)}
            />
            <Button style={styles.buttons} mode="contained" onPress={() => setModal(true)} theme={theme}
                icon={(picture=="")?"upload":"check"}
            >
                Upload
            </Button>
            <Button style={styles.buttons} icon="content-save" mode="contained" onPress={() => console.log("saved")} theme={theme}>
                Save
            </Button>
            <Portal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={()=>{
                    setModal(false)
                }}
            >
                <View style={styles.styleView}>
                    <View style={styles.styleViewButton}>
                        <Button icon="camera" mode="contained" onPress={() => pickFromCamera()} theme={theme}>
                            Camera                    
                        </Button>
                        <Button  icon="image-area" mode="contained" onPress={() => pickFromGallery()} theme={theme}>
                            Galery                    
                        </Button>
                    </View>
                    <Button icon="camera" onPress={() => setModal(false)} theme={theme}>
                        Cancel                    
                    </Button>
                </View>
               
                
            </Modal>
            </Portal>
        </Provider>
    //     <Provider>
    //     <Portal>
    //       <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
    //         <Text>Example Modal.  Click outside this area to dismiss.</Text>
    //       </Modal>
    //     </Portal>
    //     <Button style={{marginTop: 30}} onPress={showModal}>
    //       Show
    //     </Button>
    //   </Provider>
    );
}
const theme={
    colors:{
        primary:"#5faaff"
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        // paddingHorizontal:0
    },
    styleViewButton:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    styleView:{
        position:"absolute",
        bottom:-300 ,
        width:"100%",
        backgroundColor:"white",
        padding:10
    },
    buttons:{
        margin:5
    }
})
export default CreateEmployee;