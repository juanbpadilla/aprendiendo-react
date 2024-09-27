import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'nategentile7',
    name: 'Nate Gentile',
    isFollowing: false
  },
  {
    userName: 'PacoHernandezs',
    name: 'Paco Hernández',
    isFollowing: true
  },
  {
    userName: 'chemaalonso',
    name: 'Chema Alonso',
    isFollowing: false
  }
]

export function App() {

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName} // identificador único, user id u otro valor similar
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }

      {/* {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      } */}

      {/* <TwitterFollowCard initialIsFollowing userName="midudev">
        Miguel Angel Durán
      </TwitterFollowCard>

      <TwitterFollowCard initialIsFollowing={false} userName="nategentile7" >
        Nate Gentile
      </TwitterFollowCard> */}

      {/* <TwitterFollowCard isFollowing userName="chemaalonso" name="Chema Alonso" /> */}
    </section>
  )
}