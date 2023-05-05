import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/AlyssonBormann.png"
          />

          <div className={styles.authorInfo}>
            <strong>Alysson Bormann</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1H</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 🚨!</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        <p>🏆{' '} <a href="#">xvideos.com</a></p>
        <p>
          <a href="#">#projeto</a>{' '}
          <a href="#">#show</a>{' '}
          <a href="#">#bola</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
