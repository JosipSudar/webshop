import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <div className='main-container'>
    <Component {...pageProps} />
  </div>
  <Footer/>
  </>
}
