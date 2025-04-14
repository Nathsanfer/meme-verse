import styles from './feed.module.css';
import MemeCard from '../memeCard';

const Feed = ({ memes }) => {
  return (
    <section className={styles.feedSection}>
      <div className={styles.feedHeader}>
        <h2 className={styles.sectionTitle}>Feed de Memes</h2>
        <div className={styles.feedFilters}>
          <button className={`${styles.filterButton} ${styles.active}`}>Recentes</button>
          <button className={styles.filterButton}>Populares</button>
          <button className={styles.filterButton}>Seguindo</button>
        </div>
      </div>
      
      <div className={styles.feedGrid}>
        {memes && memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </section>
  );
};

export default Feed;