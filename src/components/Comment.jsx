import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment(){
    onDeleteComment(content)
  }
  return(
    <div className={styles.comment}>
       <Avatar
          hasBorder={false}
          src="https://github.com/AlyssonBormann.png"
        />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alysson Bormann</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1H atrás</time>
            </div>
            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}