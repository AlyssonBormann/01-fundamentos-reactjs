import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src='https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'/>

      <div className={styles.profile}>
        <img className={styles.avatar} src='https://github.com/AlyssonBormann.png'/>
        <strong>Alysson Bormann</strong>
        <span>Web Developer</span>
      </div>

      <footer>
          <a href='#'>
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
    </aside>
  )
}