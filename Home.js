import React,{useEffect,useState} from "react";
import { Text,StyleSheet,Image,View,FlatList, Alert} from "react-native";
import { ActivityIndicator, Card, FAB } from "react-native-paper";
function Home(props) {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  
  

  const refreshData=()=>{
    fetch(
      "http://192.168.1.10:3000/"
    ).then(res=>res.json())
    .then(result=>{
        setData(result)
        setLoading(false)
    }).catch((err)=>{
      Alert.alert("Error "+err);
    })
  }
  useEffect(()=>{
    refreshData();    
  },[])
  const list=[
    // {"id":1,"nombre":"Juan","work":"dev-front"},
    // {"id":2,"nombre":"Pedro","work":"dev-back"},
    // {"id":3,"nombre":"Jose","work":"QA"},
    // {"id":4,"nombre":"Marimar","work":"BBDD"},
    // {"id":5,"nombre":"Juan","work":"dev-front"},
    // {"id":6,"nombre":"Pedro","work":"dev-back"},
    // {"id":7,"nombre":"Jose","work":"QA"},
    // {"id":8,"nombre":"Marimar","work":"BBDD"},
    // {_id:1,nombre:"Meliodas",email:"Meliodas@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/a/af/Meliodas_Anime.png/revision/latest/scale-to-width-down/350?cb=20150719214811&path-prefix=es"},
    // {_id:2,nombre:"Elizabeth",email:"Elizabeth@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/7/7e/Elizabeth_Anime.png/revision/latest/scale-to-width-down/350?cb=20160110155917&path-prefix=es"},
    // {_id:3,nombre:"Escanor",email:"Escanor@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/e/e1/Escanor_con_Rhitta_de_dia.png/revision/latest/scale-to-width-down/350?cb=20200307044617&path-prefix=es"},
    // {_id:4,nombre:"Ban",email:"Ban@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/e/e0/Ban_Anime.png/revision/latest/scale-to-width-down/350?cb=20150719220555&path-prefix=es"},
    // {_id:5,nombre:"Diane",email:"Diane@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/3/35/Diane_Anime.png/revision/latest?cb=20150719213859&path-prefix=es"},
    // {_id:6,nombre:"Gowther",email:"Gowther@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/0/0b/Gowther_%28anime%29.png/revision/latest/scale-to-width-down/180?cb=20160109065758&path-prefix=es"},
    // {_id:7,nombre:"Merlin",email:"Merlin@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/2/29/Merl%C3%ADn_C.png/revision/latest/scale-to-width-down/120?cb=20150301210126&path-prefix=es"},
    // {_id:8,nombre:"King",email:"King@email.com",salary:"2M Sus",phone:12345,position:"anime-person",picture:"https://static.wikia.nocookie.net/nanatsu-no-taizai/images/7/7c/King_C.png/revision/latest/scale-to-width-down/120?cb=20150120034121&path-prefix=es"}
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
      <Card 
        style={styles.mycard} 
        key={el._id}
        onPress={()=>props.navigation.navigate("Profile",{"item":el})}>
          <View style={styles.cardView}>
            <Image style={{width:80,height:80,borderRadius:50/2}}
            source={{uri:el.picture}}
            />
            <View style={{padding:10}}>
              <Text style={styles.text}>{el.name}</Text>
              <Text style={styles.text}>{el.position}</Text>
            </View>

          </View>
        </Card>
    );
  });
    return (
      <View>
        {/* {loading?
            <ActivityIndicator size="large" color="#00ff00" />
            :
        <FlatList 
          data={data}
          refreshing={loading}
          onRefresh={()=>refreshData()}
          renderItem = {({item}) => {
            return renderList(item)
          }}
          keyExtractor={item=>item._id}
        />} */}
        <FlatList 
          data={data}
          refreshing={loading}
          onRefresh={()=>refreshData()}
          renderItem = {({item}) => {
            return renderList(item)
          }}
          keyExtractor={item=>item._id}
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