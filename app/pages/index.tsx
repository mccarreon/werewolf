import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <button className={"btn btn-primary"}>Click me!</button>
    </Layout>
  )
}

export default Home
