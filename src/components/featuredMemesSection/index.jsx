import styles from './featuredMemesSection.module.css';
import FeaturedMemeCard from '../featuredMemeCard';

const FeaturedMemesSection = ({featuredMemes}) => {
    return (
        <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
            <div className={styles.featuredGrid}>
              {featuredMemes.map((meme) => (
                // COMPONENTE: FeaturedMemeCard
                <FeaturedMemeCard meme={meme}/>
                // FIM COMPONENTE: FeaturedMemeCard
              ))}
            </div>
          </section>
    );
}

export default FeaturedMemesSection;