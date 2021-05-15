import React, { ReactChild } from 'react'
import './content-card.scss'

const ContentCard = ({ children }: { children: ReactChild[] | ReactChild }) => {
  return <div className="content-card">{children}</div>
}

export default ContentCard
