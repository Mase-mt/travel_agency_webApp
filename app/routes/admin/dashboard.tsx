import { Header } from "components"

const dashboard = () => {
  const user ={
    name:'Masamo',

  }
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description='Track activity, trends and popular destinations in real-time.'
      />
      Dashboard contents
    </main>
  )
}

export default dashboard