import Layout from '@/components/Layout'
import useResponsive from '@/components/Useresponsive'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '@/styles/Home.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  const onMobile = useResponsive();

  return (
    <>
      {!onMobile ? <Layout>
        <Component {...pageProps} />
      </Layout> : <div className={styles.sizeInfo}>
        <p>Available on desktop devices only</p>
      </div>}
    </>
  )
}
