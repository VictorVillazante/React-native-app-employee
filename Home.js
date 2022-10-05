import React from "react";
import { Text,StyleSheet,Image,View,FlatList} from "react-native";
import { Card, FAB } from "react-native-paper";
function Home(props) {
  const list=[
    {"id":1,"nombre":"Juan","work":"dev-front"},
    {"id":2,"nombre":"Pedro","work":"dev-back"},
    {"id":3,"nombre":"Jose","work":"QA"},
    {"id":4,"nombre":"Marimar","work":"BBDD"},
    {"id":5,"nombre":"Juan","work":"dev-front"},
    {"id":6,"nombre":"Pedro","work":"dev-back"},
    {"id":7,"nombre":"Jose","work":"QA"},
    {"id":8,"nombre":"Marimar","work":"BBDD"},
  ]
  // const renderList=list.map((el)=>{
  //   return (
  //     <Card style={styles.mycard} key={el.id}>
  //         <View style={styles.cardView}>
  //           <Image style={{width:80,height:80,borderRadius:50/2}}
  //           source={{uri:"https://i.pinimg.com/736x/b0/0e/35/b00e35bd06e1db3cd0d1a3ad84815e8e--img-meme-saitama-one-punch-man.jpg"}}
  //           />
  //           <View style={{padding:10}}>
  //             <Text style={styles.text}>{el.nombre}</Text>
  //             <Text style={styles.text}>{el.work}</Text>
  //           </View>

  //         </View>
  //       </Card>
  //   );
  // });
    let value=0;
    const renderList=((el)=>{
    return (
      <Card style={styles.mycard} key={el.id}>
          <View style={styles.cardView}>
            <Image style={{width:80,height:80,borderRadius:50/2}}
            source={{uri:"https://i.pinimg.com/736x/b0/0e/35/b00e35bd06e1db3cd0d1a3ad84815e8e--img-meme-saitama-one-punch-man.jpg"}}
            />
            <View style={{padding:10}}>
              <Text style={styles.text}>{el.nombre}</Text>
              <Text style={styles.text}>{el.work}</Text>
            </View>

          </View>
        </Card>
    );
  });
    return (
      <View >
        <FlatList 
          data={list}
          renderItem = {({item}) => {
            return renderList(item)
          }}
          keyExtractor={item=>item.id}
        />
        <FAB
            icon="plus"
            small={false}
            style={styles.fab}
            theme={{colors:{accent:"#00ffaa"}}}
            onPress={() =>props.navigation.navigate("CreateEmployee") 
            // {
            //   // console.log('Dowloand data of NASA STATE='+value+"%")
            //   // value+=10;
            //   // if(value==100){
            //   //   console.log("Dowloand completed you are a hacker");
            //   // }
            //   props.navigation.navigate("Create")
            // }
            }
          />
        {/* {renderList} */}
      </View >
    );
  }
const styles=StyleSheet.create({
  mycard:{
    padding: 5,
    margin:5,
    height:100
    // height:200,
    // width:200,
  },
  cardView:{
    flexDirection:"row",
    padding:5
  },
  text:{
    fontSize:20
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
})
export default Home;