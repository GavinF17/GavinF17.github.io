import React from 'react'
import Header from '../../components/header'

const Posts = () => {
  return (
    <div className="posts">
      <Header
        breadcrumb={[
          { title: 'Home', to: '/' },
          { title: 'Posts', to: '/posts', active: true }
        ]}
      />
    </div>
  )
}

export default Posts
