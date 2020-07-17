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
            title="About me"
            description= " Aqui tem que ir algo sobre alguma coisa "
          />
          <Sidebar
            title="About blog"
            description= "I will tell you everything "
          />
        </aside>
      </Container>
    </main>
  </div>
);