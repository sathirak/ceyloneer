import styles from './page.module.css'
import Image from 'next/image'

import { Open_Sans, Shippori_Antique } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

const shipporiAntique = Shippori_Antique({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Discover Sri Lanka 🏝️',
}
 
export default function Page() {
  return (
    <>
      <h1 className={shipporiAntique.className} >Discover Sri Lanka</h1>
      <section className={styles.home_paint} >
        <Image src="/paint/main.jpg" priority={true} fill={true} 
        placeholder ='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        alt="Main image of the site, a blue wavy sri lankan beach" objectFit="cover"/>
      </section>
    </>
  );
}