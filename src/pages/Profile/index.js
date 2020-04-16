import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import img from "../../assets/img.png";

import styles from "./styles";

export default function Profile() {
  const navigation = useNavigation();

  function navigateToMyAccount() {
    navigation.navigate("MyAccount");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Profile</Text>

        <TouchableOpacity onPress={() => navigateToMyAccount()}>
          <Feather name="settings" size={22} color="#737380" />
        </TouchableOpacity>
      </View>
      <View style={styles.userNamebox}>
        <Text style={styles.userName}>Hello Profile User</Text>
        <Feather name="user" size={60} color="#737380" />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", marginTop: 5 }}>Cidade</Text>
        <Text>Nome da cidade</Text>
        <Text style={{ fontWeight: "bold", marginTop: 5 }}>Cidade</Text>
        <Text>Nome da cidade</Text>
      </View>
      <Text style={{ fontWeight: "bold", marginTop: 16 }}>
        Vendedores Favoritos
      </Text>
      <View style={styles.favoriteSeller}>
        <TouchableOpacity>
          <Feather name="user" size={55} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={55} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={55} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={55} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={55} color="#737380" />
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "bold", marginTop: 16 }}>Meus anuncios</Text>
      <View style={styles.myAds}>
        <TouchableOpacity>
          <Image source={img} style={styles.announcementImg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={img} style={styles.announcementImg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={img} style={styles.announcementImg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={img} style={styles.announcementImg} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.actionText}>Tornar-se vendedor</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
