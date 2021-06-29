import { useEffect, useState } from 'react';

import './styles/global.scss';
import './styles/app.scss';
import './styles/components/sideBar.scss';
import './styles/components/main.scss';

function App() {
  const [githubUsername, setGithubUsername] = useState();
  const [techs, setTechs] = useState();

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },

      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="username_github"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnológias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://github.com/josmar-jr.png" alt="my profile" />
              <div className="user-info">
                <strong>Josmar Junior</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Dev Front-End | UI Desing | Html | CSS | Javascript - Graduando em
              Ciências e Tecnologia pela Universidade Federal do Rio Grande do
              Norte - UFRN
            </p>
            <a href="https://github.com/josmar-jr">Acessar o meu perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://github.com/josmar-jr.png" alt="my profile" />
              <div className="user-info">
                <strong>Josmar Junior</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Dev Front-End | UI Desing | Html | CSS | Javascript - Graduando em
              Ciências e Tecnologia pela Universidade Federal do Rio Grande do
              Norte - UFRN
            </p>
            <a href="https://github.com/josmar-jr">Acessar o meu perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://github.com/josmar-jr.png" alt="my profile" />
              <div className="user-info">
                <strong>Josmar Junior</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Dev Front-End | UI Desing | Html | CSS | Javascript - Graduando em
              Ciências e Tecnologia pela Universidade Federal do Rio Grande do
              Norte - UFRN
            </p>
            <a href="https://github.com/josmar-jr">Acessar o meu perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://github.com/josmar-jr.png" alt="my profile" />
              <div className="user-info">
                <strong>Josmar Junior</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Dev Front-End | UI Desing | Html | CSS | Javascript - Graduando em
              Ciências e Tecnologia pela Universidade Federal do Rio Grande do
              Norte - UFRN
            </p>
            <a href="https://github.com/josmar-jr">Acessar o meu perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
