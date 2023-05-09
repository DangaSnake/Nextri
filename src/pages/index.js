import { Inter } from 'next/font/google'
import Header from './components/shared/header'
import IntroSection from './components/IntroSection/IntroSection'
import CategoriesSection from './components/CategoriesSection/CategoriesSection'
import ProductSection from './components/ProductSection/ProductSection'
import CollectionSection from './components/CollectionSection/CollectionSection'
import Footer from './components/shared/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <CategoriesSection />
      <ProductSection />
      <CollectionSection />
      <Footer />
    </>
  )
}
