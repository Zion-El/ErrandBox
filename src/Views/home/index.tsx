import Goodbye from '../../components/static/Goodbye'
import Hero from '../../components/static/Hero'
import Join from '../../components/static/Join'
import OneApp from '../../components/static/OneApp'
import StressOff from '../../components/static/StressOff'
import NewFaq from '../../components/static/faq/NewFAQ'
import MainLayout from '../../layout/MainLayout'

const Home = () => {
  return (
    <MainLayout>
        <Hero/>
        <OneApp/>
        <Goodbye/>
        <Join/>
        <NewFaq/>
        <StressOff/>
    </MainLayout>
  )
}

export default Home