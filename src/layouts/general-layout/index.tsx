import React, { ReactChild, ReactChildren } from 'react'
import './general-layout.scss'

const GeneralLayout = ({
  children
}: {
  children: ReactChild | ReactChildren
}) => <>{children}</>

export default GeneralLayout
