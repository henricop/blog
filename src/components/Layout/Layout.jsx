import React from 'react';
import Header from '../Header';
import Container from '../Container';
import Sidebar from '../Sidebar';
import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';
import './Layout.css';

export default ({ children, title }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription}/>
      <link rel="icon" href={favicon}/>
    </Helmet>
    <Header title={title}/>
    <main role="main">
      {/* verificar se ta correto */}
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Projetos"
            description= "NLW 01 / NLW 02"
          />
          <Sidebar
            title="Idéias dos usuários"
            description= "Fulano : Que tal adicionar um footer no projeto?"
          />
        </aside>
      </Container>
    </main>
  </div>
);