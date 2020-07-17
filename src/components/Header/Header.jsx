import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import './Header.css';
import inst from '../../../static/inst.png';
import git from '../../../static/git.png';
import twitter from '../../../static/twitter.png';
import linkedin from '../../../static/linkedin.png';

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to="/"><h1 className="header-title">{data.site.siteMetadata.title}</h1></Link>
        <div className="div-nav">
          <ul>
            <li>
              <a href="https://www.instagram.com/henriconeves/" target="_blank"><img src={inst}
                alt="instagram" /></a>
            </li>
            <li>
              <a href="https://github.com/henricop"target="_blank" ><img src={git} alt="github" /></a>
            </li>
            <li>
              <a href="https://twitter.com/HenricoNeves" target="_blank"><img 
               src={twitter} alt="twitter" /></a>
            </li>
            <li>
              <a  href="https://www.linkedin.com/in/henrico-piubello-9a9787170/" target="_blank"><img
               src={linkedin} alt="linkedin" /></a>
            </li>
          </ul>
        </div>
      </header>
    )}
  />
);