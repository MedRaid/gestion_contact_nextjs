import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  console.log("exécution côté serveur");

  return (
    <div className={styles.page}>
      <Image src={"/hero.png"} alt="" width={200} height={200} />

      <h1>Bienvenue dans nextJs</h1>
      <Link href="/contacts" className={styles.btnlink}>
        Visiter notre application
      </Link>
    </div>
  );
}
