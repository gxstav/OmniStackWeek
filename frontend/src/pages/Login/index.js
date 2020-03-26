import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './style.css'
import heroes from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
export default function Login() {
  const [id, setId] = useState('')
  const history = useHistory()
  async function handleLogin(event) {
    event.preventDefault()
    try {
      const response = await api.post('session', { id })
      localStorage.setItem('ong_id', id)
      localStorage.setItem('ong_name', response.data.name)
      history.push('/profile')
    } catch (error) {
      alert('Erro ao logar, tente novamente.')
    }
  }
  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input value={id} onChange={event => setId(event.target.value)} type="text" placeholder="Sua ID" />
          <button type="submit" className="button">Entrar</button>
          <Link className="back-link" to="/register"><FiLogIn size={16} color='#E02041' />Não tenho cadastro</Link>
        </form>
      </section>
      <img src={heroes} alt="Heroes" />
    </div>
  )
}