import React from 'react'
import Header from '../../components/header'
import ContentCard from '../../components/content-card'
import ReactMarkdown from 'react-markdown'
import { experience } from '../../posts/experience'

const Posts = () => {
  return (
    <div className="posts">
      <Header
        breadcrumb={[
          { title: 'Home', to: '/' },
          { title: 'Posts', to: '/posts', active: true }
        ]}
      />
      <ContentCard>
        <ReactMarkdown>{experience}</ReactMarkdown>
      </ContentCard>
    </div>
  )
}

export default Posts
