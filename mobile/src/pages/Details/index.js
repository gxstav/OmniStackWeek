import React from 'react'
import * as MailComposer from 'expo-mail-composer'
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import style from './style'
import logo from '../../assets/logo.png'
export default function Details() {
  const navigation = useNavigation()
  const route = useRoute()
  const incident = route.params.incident
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso '${incident.title}' com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`
  function backToHome() {
    navigation.goBack()
  }
  function triggerEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }
  function triggerWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
  }
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={backToHome}>
          <Feather size={28} name="arrow-left" color="#E02041" />
        </TouchableOpacity>
        <Image source={logo} />
      </View>
      <View style={style.incident}>
        <Text style={[style.incidentData, { marginTop: 0 }]}>ONG:</Text>
        <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
        <Text style={style.incidentData}>CASO:</Text>
        <Text style={style.incidentValue}>{incident.title}</Text>
        <Text style={style.incidentData}>DESCRIÇÃO:</Text>
        <Text style={style.incidentValue}>{incident.description}</Text>
        <Text style={style.incidentData}>Valor:</Text>
        <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
      </View>
      <View style={style.contact}>
        <Text style={style.contactTitle}>Salve o dia!</Text>
        <Text style={style.contactTitle}>Seja o herói desse caso.</Text>
        <Text style={style.contactHint}>Entre em contato:</Text>
        <View style={style.contactButtons}>
          <TouchableOpacity style={style.contactButton} onPress={triggerEmail}>
            <Text style={style.contactText}>E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.contactButton} onPress={triggerWhatsapp}>
            <Text style={style.contactText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}