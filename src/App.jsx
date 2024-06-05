import { Home } from './Pages/Home'
import { GlobalProvider } from './context/GlobalContext'

function App() {


  return (
    <>
      <main className='relative'>
        <GlobalProvider>
          <Home />
        </GlobalProvider>
      </main>
    </>
  )
}

export default App
