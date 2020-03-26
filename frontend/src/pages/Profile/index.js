import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
export default function Profile() {
  const history = useHistory()
  const ong_name = localStorage.getItem('ong_name')
  const ong_id = localStorage.getItem('ong_id')
  const [incidents, setIncidents] = useState([])
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ong_id
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ong_id])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incident/${id}`, {
        headers: {
          Authorization: ong_id
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('Erro ao excluir caso, tente novamente.')
    }
  }
  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Olá, {ong_name}!</span>
        <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button"><FiPower size={18} color="#E02041" /></button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#A8A8B3"></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}