import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import useResponsive from '@/components/Useresponsive'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const onMobile = useResponsive();
  
  return (
    <>
      <Head>
        <title>Transferberry</title>
        <meta name="description" content="Transferberry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homepage}>
        <div className={styles.illustration_path}>
          <svg width="817" height="818" viewBox="0 0 817 818" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M221.5 519.5C235.5 686.7 185 770.5 158 791.5C144.5 840.833 97.3995 851.4 16.9995 499C-63.4005 146.6 194.833 23.1667 334 5.5C506.666 -6.16666 844.2 1.2 813 124C774 277.5 603 272 548 224C493 176 426.5 142.5 328 178.5C229.5 214.5 204 310.5 221.5 519.5Z" stroke="#1C988E" stroke-width="2" />
          </svg>
          <div className={styles.image}>
            <Image src='/woman_img.png' alt='' width={60} height={60} />
          </div>
        </div>
        <div className={styles.illustration_stars}>
          <svg width="69" height="55" viewBox="0 0 69 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.4475 2.96265L29.8278 18.7418L44.0066 26.447L28.2274 29.8273L20.5222 44.0061L17.142 28.2269L2.96313 20.5217L18.7423 17.1415L26.4475 2.96265Z" fill="#1C9687" />
            <path d="M56.1757 27.812L58.2432 37.463L66.9153 42.1757L57.2643 44.2432L52.5516 52.9154L50.4841 43.2644L41.812 38.5517L51.463 36.4842L56.1757 27.812Z" fill="#EB485B" />
          </svg>
          <svg width="69" height="55" viewBox="0 0 69 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.4475 2.96265L29.8278 18.7418L44.0066 26.447L28.2274 29.8273L20.5222 44.0061L17.142 28.2269L2.96313 20.5217L18.7423 17.1415L26.4475 2.96265Z" fill="#1C9687" />
            <path d="M56.1757 27.812L58.2432 37.463L66.9153 42.1757L57.2643 44.2432L52.5516 52.9154L50.4841 43.2644L41.812 38.5517L51.463 36.4842L56.1757 27.812Z" fill="#EB485B" />
          </svg>
        </div>
        <span className={styles.blur}></span>
        <div className={styles.left}>
          <div className={styles.left__title}>
            <span></span>
            <h1>The future of financial security</h1>
          </div>
          <p>To sorry worls an at do spoil along. Incommade he depending do frankiness remainder to. Edwards day almost active him friend thirty piqued.</p>
          <div className={styles.left__waitlist}>
            <input placeholder='Join our waitlist' />
            <button>Join</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <Image src='/phone.png' alt='' fill />
          </div>
        </div>
      </div>
    </>
  )
}
