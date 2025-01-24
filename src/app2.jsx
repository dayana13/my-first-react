
import Entry from "./components/entry2"
import Header2 from "./components/header2"
import data from "./data"

function App2() {

  const dataElements = data.map((data) => {
    return (
      <Entry
        key={data.id}
        {...data}
      />)
  })

  return (
    <>
      <Header />
      <main className="container">
        {dataElements}
      </main>
    </>
  )
}

export default App2

