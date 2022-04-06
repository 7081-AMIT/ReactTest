import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Screen1 = () => {
  const FLS = [
    {
      name: 'Apple',
      Quality: 'fruits',
      Price: '$2.00',
      Quintity: '100gr',
    },
    {
      name: 'Banana',
      Quality: 'fruits',
      Price: '$2.00',
      Quintity: '100gr',
    },
    {
      name: 'Rose',
      Quality: 'flower',
      Price: '$2.00',
      Quintity: '100PC',
    },
    {
      name: 'Lotus',
      Quality: 'flower',
      Price: '$2.00',
      Quintity: '100PC',
    },
    {
      name: 'Tomato',
      Quality: 'Vegitables',
      Price: '$2.00',
      Quintity: '100gr',
    },
    {
      name: 'Potato',
      Quality: 'Vegitables',
      Price: '$2.00',
      Quintity: '100gr',
    },
    {
      name: 'Parrot',
      Quality: 'Bird',
      Price: '$2.00',
      Quintity: '100/pices',
    },
    {
      name: 'Peigion',
      Quality: 'Bird',
      Price: '$2.00',
      Quintity: '100gr',
    },
    {
      name: 'Cow',
      Quality: 'Animal',
      Price: '$2.00',
      Quintity: 'Rs. 10000',
    },
    {
      name: 'Horse',
      Quality: 'Animal',
      Price: '$2.00',
      Quintity: 'Rs. 50000',
    },
  ];

  return (
    <View style={{backgroundColor: 'green'}}>
      <Text style={{margin: 50, alignSelf: 'center'}}>Hello Moto</Text>
      <Image style={styles.image} source={require('../image/photo.png')} />
      <View style={styles.container}>
        <View>
          <FlatList
            data={FLS}
            renderItem={({item}) => {
              return (
                <View style={{}}>
                <View style={styles.input1}>
                 
                    <Image
                      style={styles.image1}
                      source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/f3.png')}></Image>

                    <Text style={styles.Name}>{item.name}</Text>
                    <Text style={styles.quality}>{item.Quality}</Text>
                    <TouchableOpacity>
                      <Text style={{marginLeft:300, fontSize: 18}}>
                        {item.Price}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.quintity}>{item.Quintity}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    height: 50,
    width: 50,
    padding: 10,
  },
  image1: {
    borderRadius: 100,
    height: 30,
    width: 30,
    padding: 10,
    alignSelf:'flex-start',
  },
  container: {
    backgroundColor: 'white',
    height: height * 1,
    width: width * 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input1: {
      flexDirection:'',
    backgroundColor: 'pink',
    borderRadius: 10,
    height: height / 6,
    width: width / 1.03,
    margin: 5,
  },
  Name: {
    // margin:20,
    // fontSize:18
    marginLeft: 80,
    fontSize: 25,
    marginTop: 20,
  },
  quality: {
    color: 'red',
    //padding:20,
    // marginBottom:30,
    // marginHorizontal:20
    marginLeft: 80,
  },
  price: {
    marginLeft: 300,
    fontSize: 18,
  },
  quintity: {
    marginLeft: 300,
  },
});
