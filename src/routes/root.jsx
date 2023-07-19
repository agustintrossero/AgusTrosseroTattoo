import Header from '../components/Header'
import ItemListContainer from '../components/ItemListContainer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (

    <>
      <Header/>
      <Outlet/>      
      <ItemListContainer
        greetings="Welcome"
      />
    </>
  )
}
