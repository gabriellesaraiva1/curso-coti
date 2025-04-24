import { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import { useParams } from "react-router-dom";

export const ZipcodePage = () => {
  const params = useParams()

  const [ zipcode, setZipcode ] = useState(params.cep ? params.cep : '')

  const [ address, setAddress ] = useState({
    logradouro: '',
    bairro: '',
    estado: ''
  })

  // 1- eu preciso ter 1 input para por o cep
  // 2- eu preciso consumir a API do viacep para coletar o logradouro (rua)
  // 3- Quero escrever um texto no meu React monstrando o cep + logradouro

  /**
   * ROTA é a parte principal da API
   * VERBO é mandatório para se comunicar com uma API
   * 
   * VERBOS do RESTFUL API
   * 
   * GET = coletar informação
   * POST = entregar informação
   * PUT = atualizar informação
   * DELETE = remover informação
   */

  // consumir a API
  const fetchViacep = useCallback(async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
  
      const data = await response.json()
  
      return data
    } catch {
      return {
        logradouro: '',
        bairro: '',
        estado: ''
      }
    }
  }, [zipcode])

  const onMount = useCallback(async () => {
    if(params.cep) {
      setZipcode(params.cep)

      setAddress(await fetchViacep())
    }
  }, [fetchViacep, params])

  useEffect(() => {
    onMount()
  }, [onMount])

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = await fetchViacep()
    setAddress(data)
  }

  return <div>
    <Head titulo="ZipCode" background="https://reacttodo-coti.vercel.app/assets/banner-DVDpP2rH.jpg" />
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '400px',
            justifyContent: 'center'
          }}
          onSubmit={(e) => onSubmit(e)}
        >
          <label>CEP</label>
          <input  
            name="zipcode"
            type="text"
            placeholder="Coloque aqui seu CEP"
            required
            value={zipcode}
            onInput={(e) => setZipcode(e.target.value)}
          />

          <label>Logradouro</label>
          <input
            name="logradouro"
            type="text"
            value={address.logradouro}
            disabled
          />

          <label>Bairro</label>
          <input
            name="bairro"
            type="text"
            value={address.bairro}
            disabled
          />

          <label>Estado</label>
          <input
            name="estado"
            type="text"
            value={address.estado}
            disabled
          />

          <button type="submit">Submeter</button>
        </form>
        {/* input */}
        {/* cep + logradouro */}
      </div>
    <Footer />
  </div>
}

export default ZipcodePage