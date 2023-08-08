import ItemListContainer from '../components/ItemListContainer'
import styles from '../styles/prints.css'

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
