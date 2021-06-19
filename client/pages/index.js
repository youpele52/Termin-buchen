import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Posts from '../components/Posts'
import Form from '../components/Form'
import { useApiContext } from '../context/ApiContext'

export default function Home() {
  return (
    <div className='px-4'>
      <Head>
        <title>Home</title>
        <meta
          name='description'
          content='Let us manage your appointments for you.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main>
        <Form />
        <Posts />
        <h1>Termin Buchen </h1>
        {/* <img src='/vercel.svg' alt='' /> */}
      </main>
    </div>
  )
}
