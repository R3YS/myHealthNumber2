import * as React from 'react';
import { StyleSheet } from 'react-native';
import './global.tsx';
import './TabThreeScreen.tsx'
import EditScreenInfo from '../components/EditScreenInfo';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TextInput,
  onChangeText,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView
} from "react-native";
import { RootTabScreenProps } from '../types';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

 const [refreshing, setRefreshing] = React.useState(false);

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
 const onRefresh = React.useCallback(() => {
   setRefreshing(true);
   wait(2000).then(() => setRefreshing(false));
 }, []);
  return (

    <View style={styles.container}>
    <View style={styles.scrollArea}>

      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
        refreshControl ={
          <RefreshControl refreshing = {refreshing}
          onRefresh = {onRefresh}
          />
        }
      >
        <ImageBackground
          source={require("../assets/images/background2.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >

          <Text style={styles.welcomeUser}>Welcome {global.nombre}!</Text>
          <View style={styles.block1}>
            <Text style={styles.cardTitle}>My Health ID</Text>
            <Text style={styles.cardInfo}>Name: {global.nombre}</Text>
            <Text style={styles.cardInfo}>Age: {global.age}</Text>
            <Text style={styles.cardInfo}>Weight: {global.weight} lbs</Text>
            <Text style={styles.cardInfo}>Height: {global.height} cm</Text>
            <Text style={styles.cardInfo}>Body Mass Index: {global.height} cm</Text>

          </View>
          
          <View style={styles.block1}>
            <Text style={styles.cardTitle}>Let&#39;s take a look at our day!</Text>
            <Text style={styles.cardInfo}>You have consumed {global.total} calories today!</Text>
            <Text style={styles.cardInfo}>You burned a whopping {global.height} calories today!</Text>
            <Text style={styles.cardInfo}>Total Time Exercised: {global.weight}</Text>
            <Text style={styles.cardInfo}>Let's Keep it Going! You're on Fire!</Text>
          </View>
          
          <View style={styles.rect2}>
            <Text style={styles.cardTitle}>Activity Tracker</Text>
            <Text style={styles.cardInfo}>Workout 1: {global.workout1}  Sets: {global.sets1}  Reps: {global.reps1}</Text>
            <Text style={styles.cardInfo}>Workout 2: {global.workout2}  Sets: {global.sets2}  Reps: {global.reps2}</Text>
            <Text style={styles.cardInfo}>Workout 3: {global.workout3}  Sets: {global.sets3}  Reps: {global.reps3}</Text>
            <Text style={styles.cardInfo}>Exercise 1: {global.exercise1}  Duration: {global.duration1}  Reps: {global.distance1}</Text>
            <Text style={styles.cardInfo}>Exercise 2: {global.exercise2}  Duration: {global.duration2}  Reps: {global.distance2}</Text>
           
          </View>
          
          <View style={styles.rect4Stack}>
            <View style={styles.rect4}>
              <Text style={styles.cardTitle}>
              </Text>
              <TextInput
                     style={styles.cardInfo}
                     onChangeText={onChangeText}
                     value={Text}
                     placeholder="-- What should I do today?"
              >
              </TextInput>
              <TextInput
                     style={styles.cardInfo}
                     onChangeText={onChangeText}
                     value={Text}
                     placeholder="-- What else could I do today?"
              >
              </TextInput>
              <TextInput 
                     style={styles.cardInfo}
                     onChangeText={onChangeText}
                     value={Text}
                     placeholder="-- ... "
              >
              </TextInput>
              <TextInput
                     style={styles.cardInfo}
                     onChangeText={onChangeText}
                     value={Text}
                     placeholder="-- ... "
              >
              </TextInput>
              <TextInput
                     style={styles.cardInfo}
                     onChangeText={onChangeText}
                     value={Text}
                     placeholder="-- ... "
              >
              </TextInput>
            </View>
            <View >
              <View >
                <View >
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.cardTitle}>Weekly Report</Text>
            <Text style={styles.cardInfo}>Monday:</Text>
            <Text style={styles.cardInfo}>Tuesday:</Text>
            <Text style={styles.cardInfo}>Wednesday:</Text>
            <Text style={styles.cardInfo}>Thursday:</Text>
            <Text style={styles.cardInfo}>Friday:</Text>
          </View>
          <View>
            <Text style={styles.cardTitle}>Monthly Report</Text>
            <Text style={styles.cardInfo}>Week 1:</Text>
            <Text style={styles.cardInfo}>Week 2:</Text>
            <Text style={styles.cardInfo}>Week 3:</Text>
            <Text style={styles.cardInfo}>Week 4:</Text>
          </View>
          <View style={styles.rect2}

            style={styles.button3}
          >
            <Text style={styles.cardTitle}>Diet</Text>
            <Text style={styles.cardInfo}>You have consumed {global.breakfast} calories for breakfast today!</Text>
            <Text style={styles.cardInfo}>You have consumed {global.lunch} calories for lunch today!</Text>
            <Text style={styles.cardInfo}>You have consumed {global.dinner} calories for dinner today!</Text>
            <Text style={styles.cardInfo}>You have consumed {global.snack} calories in snacks today!</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 1000
  },
  image: {
    width: 1850,
    height: 1570,
    marginTop: -15,
    marginLeft: -624
  },
  image_imageStyle: {},
  welcomeUser: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212",
    fontSize: 36,
    textAlign: "center",
    width: "20%",
    height: 47,
    marginTop: 64,
    marginLeft: 641
  },
  button2: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(178,103,245,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 15,
    marginTop: 54,
    marginLeft: 664
  },
  cardTitle: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212",
    height: 18,
    marginTop: 10,
    marginLeft: 10,
    textDecorationLine: "underline",
    fontSize:13,
  },
  cardInfo: {
    fontFamily: "Roboto",
    color: "#121212",
    marginLeft: 12,
    fontSize:12,
    height:18,
  },
  rect2: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(239,227,77,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  loremIpsum: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 176,
    height: 18,
    marginLeft: 10
  },
  button: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(148,224,66,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  activityTracker: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 96,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  rect4: {
    top: 0,
    width: "92%",
    height: 130,
    position: "absolute",
    backgroundColor: "rgba(123,115,115,0.5)",
    left: 40,
    borderRadius: 15
  },
  loremIpsum2: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 211,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  stackFiller: {
    flex: 1
  },
   rect4Stack: {
    height: 140,
    marginTop: 20,
    marginLeft: 624,
    marginRight: 866
  },
  rect5: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(106,117,129,0.5)",
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 664
  },
  weeklyReport: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 96,
    height: 20,
    marginTop: 10,
    marginLeft: 10
  },
  rect6: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(178,167,222,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  monthlyReport: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 96,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  button3: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(80,227,194,0.5)",
    borderRadius: 15,
    marginTop: -210,
    marginLeft: 664
  },
  diet: {
    fontFamily: "Roboto",
    color: "#121212",
    width: 30,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  block1: {
    width: "18%",
    height: 130,
    backgroundColor: "rgba(239,227,77,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
});
