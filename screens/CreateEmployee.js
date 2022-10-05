import React,{useState} from "react";
import { StyleSheet,View} from "react-native";
import { Modal, TextInput ,Button} from 'react-native-paper';
import { Portal, Text, Provider } from 'react-native-paper';
const CreateEmployee=()=>{
    const [Name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [salary,setSalary]=useState("")
    const [picture,setPicture]=useState("")
    const [modal,setModal]=useState(false)
    const [visible, setVisible] = React.useState(false);

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
            <Button style={styles.buttons} icon="upload" mode="contained" onPress={() => setModal(true)} theme={theme}>
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
                        <Button icon="camera" mode="contained" onPress={() => console.log("Take a picture with your camera")} theme={theme}>
                            Camera                    
                        </Button>
                        <Button  icon="image-area" mode="contained" onPress={() => console.log("Select picture of galery")} theme={theme}>
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