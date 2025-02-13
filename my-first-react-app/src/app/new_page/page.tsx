import styles from './new_page.module.css'
 
export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.blog}>
      {children}
      <h1>This is Title</h1>
      <p>This is a paragraph</p>
      <button className={styles.btn}>Click me!</button>
    </main>
  );
}