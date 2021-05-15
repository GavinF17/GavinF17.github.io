import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg'
import { ReactComponent as GitHubIcon } from '../../assets/icons/github.svg'
import ContentCard from '../../components/content-card'

const Home = () => (
  <div className="home">
    <Header breadcrumb={[{ title: 'Home', to: '/', active: true }]} />
    <div className="home__content">
      <ContentCard>
        <p>Hi I'm Gavin 👋</p>
        <p>I'm a full stack developer at Contrast Security</p>
        <p>
          This is a fairly new personal site which I'm hoping to add some
          projects and posts to in future, for now though all you have is this
          page, <Link to="/experience">some of my experience</Link>, and some
          links 👇
        </p>
        <div className="home__content-links">
          <a href="https://github.com/GavinF17" target="none">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/thomasgavinfenton" target="none">
            <LinkedInIcon />
          </a>
        </div>
      </ContentCard>
    </div>
  </div>
)

export default Home
