import styles from './memeCard.module.css';
import InteractionBar from '../interactionBar';

const MemeCard = ({ meme }) => {
  return (
    <div className={styles.memeCard}>
      <div className={styles.memeHeader}>
        <div className={styles.authorInfo}>
          <img 
            src={meme.authorAvatar} 
            alt={meme.author} 
            className={styles.authorAvatar} 
          />
          <span className={styles.authorName}>{meme.author}</span>
        </div>
        <span className={styles.memeCategory}>{meme.category}</span>
      </div>
      
      <h3 className={styles.memeTitle}>{meme.title}</h3>
      <p className={styles.memeDescription}>{meme.description}</p>
      
      <div className={styles.memeImageContainer}>
        <img 
          src={meme.image} 
          alt={meme.title} 
          className={styles.memeImage} 
        />
      </div>
      
      <InteractionBar meme={meme} />
    </div>
  );
};

export default MemeCard;