import { HashRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import { Home } from './Pages/Home'
import { MyOrders } from './Pages/MyOrders'
import { MyOrder } from './Pages/MyOrder'
import { SignIn } from './Pages/SignIn'
import { NotFound } from './Pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <GlobalProvider>
        <HashRouter>
          <Header />
          <main className='relative'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/my-orders' element={<MyOrders />} />
              <Route path='/my-order/:id' element={<MyOrder />} />
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
      </GlobalProvider>
    </>
  )
}

export default App
