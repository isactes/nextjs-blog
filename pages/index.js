//localdomain.app

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
//import styles from '../styles/alert.module.css';
//import cn from 'classnames'; 
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';



export default function Home({ allPostsData }){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Frontend Developer Jr
           Jr level experience in web design and development knowledge, producing quality work <a href='https://isac-portfolio.netlify.app/'>Look my old portfolio</a></p>
        <p>
        This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
        
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
              </Link>
              <br />
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>      
    </Layout>
  ); 
}

//se agreaga el export
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
if (typeof window !== 'undefined') {
  // Perform localStorage action
  const item = localStorage.getItem('key')
}
