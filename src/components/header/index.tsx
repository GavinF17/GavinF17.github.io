import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  title: string
  to: string
  active?: boolean
}

const Breadcrumb = ({ breadcrumb }: { breadcrumb: BreadcrumbItem[] }) => {
  return (
    <div className="header__breadcrumb">
      {breadcrumb.map(({ title, to, active }) => (
        <>
          {' '}
          /{' '}
          <span
            className={`header__breadcrumb ${
              active ? 'header__breadcrumb--active' : ''
            }`}
          >
            <Link to={to}>{title}</Link>
          </span>
        </>
      ))}
    </div>
  )
}

const Header = ({ breadcrumb }: { breadcrumb: BreadcrumbItem[] }) => {
  return (
    <header className="header">
      <div className="header__name">Gavin Fenton</div>
      <Breadcrumb breadcrumb={breadcrumb} />
    </header>
  )
}

export default Header
