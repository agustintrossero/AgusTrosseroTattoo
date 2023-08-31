import styles from '../styles/prints.css'
import ItemListContainer from '../components/ItemListContainer'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function prints() {
  return (
    <>
      <ItemListContainer/>  
    </>
  )
}
