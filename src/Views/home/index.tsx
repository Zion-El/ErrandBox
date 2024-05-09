import Goodbye from '../../components/static/Goodbye'
import Hero from '../../components/static/Hero'
import Join from '../../components/static/Join'
import OneApp from '../../components/static/OneApp'
import MainLayout from '../../layout/MainLayout'

const Home = () => {
  return (
    <MainLayout>
        <Hero/>
        <OneApp/>
        <Goodbye/>
        <Join/>
    </MainLayout>
  )
}

export default Home