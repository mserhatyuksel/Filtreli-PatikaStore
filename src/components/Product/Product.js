import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Product.style';
const Product = ({img, title, price, inStock}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri: img}} resizeMode={'contain'} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        {!inStock && <Text style={styles.stok}>{'STOKTA YOK'}</Text>}
      </View>
    </View>
  );
};

export default Product;
