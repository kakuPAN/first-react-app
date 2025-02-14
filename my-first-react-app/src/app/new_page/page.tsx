import styles from './new_page.module.css'
import { inter, lusitana, daruma } from '../ui/fonts';
import Image from 'next/image';

export default function Page(){
  return (
    <main className={styles.blog}>
      <h1>This is Title</h1>
      <p>This is a paragraph</p>
      <button className={styles.btn}>Click me!</button>
      <p className={`${inter.className}`}>This is inter</p>
      <p className={`${lusitana.className}`}>This is lusitana</p>
      <p className={`${daruma.className}`}>これはdarumaです</p>
      <Image
        src="/image/sea.png"
        width={600}
        height={500}
        className="image"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </main>
  );
}