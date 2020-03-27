import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import style from './style'
import logo from '../../assets/logo.png'
export default function Incidents() {
  const navigation = useNavigation()
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [load, setLoad] = useState(false)
  function gotoDetails(incident) {
    navigation.navigate('Details', { incident })
  }
  async function loadIncidents() {
    if (load || total > 0 && incidents.length === total) return
    setLoad(true)
    const response = await api.get('/incidents', { params: { page } })
    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['X-Total-Incidents'])
    setPage(page + 1)
    setLoad(false)
  }
  useEffect(() => {
    loadIncidents()
  }, [])
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logo} />
        <Text style={style.headerText}>
          Total de <Text style={style.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>
      <Text style={style.title}>Olá!</Text>
      <Text style={style.hint}>Escolha um dos casos abaixo e salve o dia.</Text>
      <FlatList
        style={style.incidents}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.25}
        renderItem={({ item: incident }) => (
          <View style={style.incident}>
            <Text style={style.incidentData}>ONG:</Text>
            <Text style={style.incidentValue}>{incident.name}</Text>
            <Text style={style.incidentData}>CASO:</Text>
            <Text style={style.incidentValue}>{incident.title}</Text>
            <Text style={style.incidentData}>Valor:</Text>
            <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            <TouchableOpacity
              style={style.incidentDetail}
              onPress={() => gotoDetails(incident)}
            ><Text style={style.incidentDetailText}>Ver mais detalhes</Text><Feather name="arrow-right" size={16} color="#E02041" /></TouchableOpacity>
          </View>
        )} />
    </View>
  )
}