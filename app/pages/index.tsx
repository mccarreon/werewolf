import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const data = {
    "players": [
      {
          "id": 1,
          "name": "Matt Carreon",
          "alignment": null,
          "role": null,
          "alive": true
      },
      {
        "id": 2,
        "name": "John Doe",
        "alignment": "Good",
        "role": "Priest",
        "alive": false
      },
      {
        "id": 3,
        "name": "Jane Doe",
        "alignment": "Evil",
        "role": "Butcher",
        "alive": true
      }
    ]
  }

  return (
    <Layout>
      <div className="grid overflow-x-auto">
        <div className="table table-zebra">
          <thead>
            <th></th>
            <th>Name</th>
            <th>Alignment</th>
            <th>Role</th>
            <th>Status</th>
          </thead>
          {data.players.map((player, idx) => (
            <tr className="hover">
              <th>{idx+1}</th>
              <th>{player.name}</th>
              <th>{player.alignment}</th>
              <th>{player.role}</th>
              <th>{player.alive ? "Alive" : "Dead"}</th>
            </tr>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
