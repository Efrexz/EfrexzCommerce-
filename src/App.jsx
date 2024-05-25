import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Footer } from './components/Footer'
import { GlobalProvider } from './context/GlobalContext'

function App() {


  return (
    <>
      <main className='relative'>
        <GlobalProvider>
          <Header />
          <HeroSection />
          <Footer />
        </GlobalProvider>
      </main>
    </>
  )
}

export default App
