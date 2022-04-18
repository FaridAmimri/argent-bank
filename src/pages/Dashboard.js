import Welcome from '../components/welcome/Welcome'
import Accounts from '../components/accounts/Accounts'

function Dashboard() {
  return (
    <main className="bg-dark">
      <Welcome />
      <Accounts />
    </main>
  )
}

export default Dashboard
