import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/alyssonbormann.png',
      name: 'Alysson Bormann',
      role: 'CTO @ANDROMEDA'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa 👊'},
      { type: 'paragraph', content:'Acabei de subir um projeto no xvideos. É um projeto que diz no NLW Return, evento do XVIDEOS. O nome é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-06 12:07:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/alyssonbormann.png',
      name: 'Junior Pínheiro',
      role: 'Web Navigation @CABARE'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa 👊'},
      { type: 'paragraph', content:'Acabei de subir um projeto no REDTUB. É um projeto que diz no NLW Return, evento do XVIDEOS. O nome é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-01 15:07:00')
  },
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post=> {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div> 
    </div>
  )
}

