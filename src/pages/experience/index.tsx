import React from 'react'
import Header from '../../components/header'
import ContentCard from '../../components/content-card'

const getMonths = () => {
  const start = new Date('2020/08')
  const now = new Date()
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 -
    start.getMonth() +
    now.getMonth()

  return `${Math.floor(months / 12)}y, ${months % 12}m`
}

const Experience = () => {
  return (
    <div className="experience">
      <Header
        breadcrumb={[
          { title: 'Home', to: '/' },
          { title: 'Experience', to: '/experience', active: true }
        ]}
      />
      <div className="experience__content">
        <ContentCard>
          <h1>Skills</h1>

          <h2>Languages:</h2>

          <p>
            <strong>Recent</strong>: Java (Spring, Spring Boot, Hibernate,
            JUnit), TypeScript/JavaScript (React, Node, Jest), Go, SQL
          </p>
          <p>
            <strong>Other</strong>: Python, C / C++, C#, Angular 1
          </p>

          <h2>Tools/Platforms:</h2>
          <p>
            <strong>Recent:</strong> AWS, GCP, Jenkins, Vault, Terraform,
            Ansible, Docker, Git (Bitbucket, Github), PostgreSQL, Flyway,
            JetBrains (IntelliJ, WebStorm, PyCharm, DataGrip), Nexus
          </p>
          <p>
            <strong>Other</strong>: Azure, InfluxDB (TICK stack), Prometheus,
            RabbitMQ, Grafana, SVN, SQL Server, ELK Stack
          </p>
          <p>
            <h2>Operating Systems:</h2>
            MacOS, Kali, Ubuntu, Centos, Windows (up to 10), Windows Server (up
            to 2012)
          </p>
        </ContentCard>
        <ContentCard>
          <h1>Employment</h1>

          <h2>
            Software Engineer
            <br />
            Contrast Security 08.2020 to Current ({getMonths()})
          </h2>
          <ul>
            <li>To be filled out...</li>
          </ul>

          <h2>
            Senior Software Engineer & DevOps
            <br />
            Uleska 06.2018 to 07.2020 (2y, 2m)
          </h2>
          <ul>
            <li>
              Full-stack development of Uleska’s security platform for automated
              pen-testing and vulnerability risk analysis
            </li>

            <li>
              Backend development in Java 8 & 11, using Spring Boot & Cloud,
              Hibernate, JUnit and PostgreSQL for persistence and frontend in
              React, ES6
            </li>

            <li>
              Created CI/CD pipelines with Jenkins, Ansible, and Vault,
              deploying to both AWS and GCP
            </li>

            <li>Implemented tool automation with Python, Java and Docker</li>

            <li>
              Undertaken manual pen-tests to supplement the platform and
              research new tools
            </li>

            <li>
              As the first full-time developer at Uleska I was responsible for
              most of the initial setup involved in moving from the proof of
              concept to the fully implemented platform
            </li>

            <li>Promoted to Senior in March 2020</li>
          </ul>

          <h2>
            Security Software Developer
            <br />
            Intelligent Environments & QUB – 10.2016 to 05.2018 (1y, 8m)
          </h2>

          <ul>
            <li>
              Developed full-stack RASP & threat analytics solution for
              monitoring Intelligent Environments financial services platform,
              Interact, from scratch.
            </li>
            <li>
              Based on OWASP’s AppSensor framework consisting of 50+ detection
              points and responses
            </li>
            <li>
              Implemented listeners for security related events within the
              existing C# application
            </li>
            <li>
              Paired listeners with threat definitions and appropriate responses
              (blocking, delaying etc.)
            </li>
            <li>
              Backend in Node.js using a SQL logic store, as well as InfluxDB
              time series database for monitoring the relevant
            </li>
            events
            <li>
              Frontend analytics dashboard developed with Angular & D3.js,
              enabling SOCs to investigate past and occurring threats, and
              allowing them to configure threat definitions and responses
            </li>
            <li>
              Some research of anomaly-based machine learning to detect
              undefined threats in order to complement the rules-based approach,
              including prototyping of various algorithms in Python to determine
              their suitability for future
            </li>
            development
            <li>
              Note: the first year was a solo project as part of a Knowledge
              Transfer Partnership as a full-time employee of Queen’s University
              based at Intelligent Environments, after which I became an
              employee of Intelligent Environments
            </li>
            <li>
              Belfast office was shut down, made redundant after declining offer
              of relocation
            </li>
          </ul>
          <h2>
            Technical Specialist
            <br />
            Placement Student at Capita MITS – 07.2013 to 08.2014 (1y, 2m)
          </h2>

          <ul>
            <li>
              Daily maintenance and administration of Windows & Linux servers
              throughout UK & Ireland
            </li>

            <li>
              Managing server backups & restorations, alerts, access, monitoring
            </li>

            <li>Management of applications such as Exchange</li>

            <li>
              Investigating, troubleshooting and resolving various IT related
              issues
            </li>

            <li>
              Initially responsible for completing various daily, weekly and
              monthly reports on the servers but was able to automate many of
              the reports using scripts saving ~2 hours of work per day
            </li>

            <li>Extended for 2 months due to performance</li>
          </ul>
        </ContentCard>
      </div>
    </div>
  )
}

export default Experience
