import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/dashboard.png";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [CPF, setCPF] = useState("");
  const [adress, setAdress] = useState("");
  const [adressNumber, setAdressNumber] = useState("");
  const [local, setLocal] = useState("");
  const [complement, setComplement] = useState("");
  const [profileImage, setImage] = useState("");
  const [description, setDescription] = useState("");


  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    const userData = { email, password, birthDate, phoneNumber, CPF, adress,
    adressNumber, local, complement, profileImage, description };
    createUserWithEmailAndPassword(userData);
  }

  if (loading) {
    return <p>Redirecionando...</p>;
  }
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="WuDo" className="logoImg" />
        <span>Por favor, digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <textarea
            type="text"
            name="email"
            id="email"
            placeholder="usuario@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <textarea
            type="password"
            name="password"
            id="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="birthDate">Insira sua data de nascimento</label>
          <textarea
            type="date"
            name="date"
            id="date"
            placeholder="dd/mm/aaaa"
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="phoneNumber">Insira seu número de telefone</label>
          <textarea
            type="tel"
            name="tel"
            id="tel"
            placeholder="(XX) XXXXX-XXXX"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="CPF">Insira seu CPF</label>
          <textarea
            type="text"
            name="cpf"
            id="tel"
            placeholder="000.000.000-00"
            onChange={(e) => setCPF(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="adress">Insira seu endereço</label>
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="Rua ou avenida"
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="adressNumber">Número</label>
          <textarea
            type="number"
            name="number"
            id="numer"
            placeholder="Número"
            onChange={(e) => setAdressNumber(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="local">Bairro</label>
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="Bairro"
            onChange={(e) => setLocal(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="complement">Complemento</label>
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="Apartamento e/ou bloco"
            onChange={(e) => setComplement(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="profileImage">Agora escolha uma foto para seu perfil</label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder=""
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="inputContainerDescription">
          <label htmlFor="description">Por último, faça uma breve descrição sobre você!</label>
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="Conte um pouco de você!"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button onClick={handleSignOut} type='submit' className="button">
          Cadastrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
