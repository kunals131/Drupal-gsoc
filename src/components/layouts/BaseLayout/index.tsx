import React from 'react'
import Sidebar from './Sidebar'
import Header from '../Header'

export enum controlTypes {
  SEARCH = 'SEARCH',
  YEAR_SELECTION = 'YEAR_SELECTION'

}

interface IBaseLayout {
    children : React.ReactNode;
    headerControl ?: controlTypes;
}

const BaseLayout = ({children, headerControl}:IBaseLayout) => {
  return (
    <>
    <Sidebar/>
      <div className={`pl-24 pr-9`}>
        <Header headerControl={headerControl}/>
        {children}
      </div>
      </>
  )
}

export default BaseLayout