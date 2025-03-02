import { dummyData } from '../data/data'
import { User } from '../interfaces/User'

const newData: User[] = []
const oldData: User[] = []

dummyData.forEach((data) => {
  data.version > 4 ? newData.push(data) : oldData.push(data)
})

export function UserData({users} : {users: User[]}) {
  return (
    <ul>
      {users.map((user: User) => {
        return <li key={user.id}>
          <h4><strong>Name: </strong>{user.name}</h4>
          <p><strong>Bio:</strong>{user.bio}</p>
          <hr></hr>
        </li>
      })}
    </ul>
  )
}

export default function Home() {
  return (
    <div>
      <h2>New people</h2>
      <UserData users={newData}></UserData>
      <h2>Old people</h2>
      <UserData users={oldData}></UserData>
    </div>
  );
}
