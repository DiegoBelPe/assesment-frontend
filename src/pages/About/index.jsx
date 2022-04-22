import './About.css';
import Photo from '../../assets/DiegoBelPe.jpeg';
import Navbar from '../../components/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <h1 className="title">Saludos 👋 soy...</h1>
        <h2 className="title_name">Diego Andres Beltran Pereira</h2>
        <div className="about_photo">
          <img src={Photo} alt="Profile Img" className="photo" />
        </div>
        <p className="description" name="description">
          Analista de Sistemas, con gran capacidad de aprendizaje y con
          experiencia en el desarrollo de aplicaciones web en las tecnologias de
          React || NodeJs || Javascript.
        </p>
        <h3 className="subtitle">Programas aprendidos en Make it real</h3>
        <ul>
          <li>
            Jestest: para el desarrollo de pruebas unitarias con el backend
          </li>
          <li>
            Redux: para el manejo de la informacion en el store en la
            aplicacion.
          </li>
          <li>
            componentes en react: para el manejo de los componentes en la
            aplicacion web en react y su uso en el frontend.
          </li>
        </ul>
        <p>Mi correo electrónico 📨 dbeltranpereira@gmail.com</p>
        <h4>
          Visita mi Github
          {' '}
          <a href="https://github.com/DiegoBelPe"> 👉🏻 GITHUB</a>
          {' '}
        </h4>
      </div>
    </div>
  );
}

export default About;
