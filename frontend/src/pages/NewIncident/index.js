import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
export default function NewIncident() {
  const history = useHistory()
  const ong_id = localStorage.getItem('ong_id')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

  async function handleNewIncident(event) {
    event.preventDefault()
    const data = { title, description, value }
    try {
      await api.post('incident', data, {
        headers: {
          Authorization: ong_id
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso com bastante detalhe para <br /> encontrar um herói próximo.</p>
          <Link className="back-link" to="/profile"><FiArrowLeft size={16} color='#E02041' />Voltar para home</Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder="Título do caso" />
          <textarea value={description} onChange={event => setDescription(event.target.value)} placeholder="Descrição" />
          <input value={value} onChange={event => setValue(event.target.value)} type="text" placeholder="Valor em reais" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}