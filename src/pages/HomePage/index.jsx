import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Head from "../../components/Head";

export const HomePage = () => {
  return <div>
    <Head titulo="Home" background="https://reacttodo-coti.vercel.app/assets/banner-DVDpP2rH.jpg" />
      <div style={{ padding: '20px' }}>
        <h1>Olá mundo! Eu sou a rota raiz</h1>
        <ul>
          <li><NavLink to="/todo-list">Minha To-do List</NavLink></li>
          <li><NavLink to="/zipcode">Meu ZipCode</NavLink></li>
        </ul>
      </div>
    <Footer />
  </div>
}

export default HomePage