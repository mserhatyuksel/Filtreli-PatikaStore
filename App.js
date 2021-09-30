import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, Image, Text, FlatList} from 'react-native';
import {logo} from './src/images';
import styles from './App.style';
import products from './products.json';
import Product from './src/components/Product';
const App = () => {
  const [data, setData] = useState(products); //İlk değer, json dosyasından gelen veriler.

  // Performans için useEffect ile aramaya yazılan her karakter için arama yapılmayıp
  // son karakter yazıldıktan 0.5 saniye sonra arama fonksiyonu çalıştırılıyor.
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const timeOut = setTimeout(() => handleOnChange(inputValue), 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [inputValue]);

  var a = [];
  const renderItem = ({item}) => {
    return (
      <Product
        img={item.imgURL}
        title={item.title}
        price={item.price}
        inStock={item.inStock}
        key={item.id}
      />
    );
  };
  const handleOnChange = text => {
    if (text !== '') {
      a = products.filter(t => t.title.toLowerCase().includes(text));
      setData(a); // Input'a yazılan text ile diziye filtre uygulanıp tekrar diziye atanıyor.
    } else {
      setData(products); // Input boşsa tüm veri diziye atanıyor.
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image style={styles.logo} source={logo} />
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        onChangeText={value => setInputValue(value)}
      />
      <FlatList
        style={styles.list}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default App;
