import { Routes, Route } from 'react-router'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'

function Router() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path='/blog' element={<Blog />} />
                  <Route path='/pricing' element={<Pricing />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/faq' element={<FAQ />} />
              </Route>
          </Routes>
      
      </>
  )
}

export default Router