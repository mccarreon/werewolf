import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <button className={"btn"}>Click me!</button>
    </Layout>
  )
}

export default Home
