import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Cortadela</title>
        <meta name="description" content="Cortadela Podcasts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Navbar />
      <Results results={results} />
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());
  return {
    props: {
      results: request
    }
  }
}
