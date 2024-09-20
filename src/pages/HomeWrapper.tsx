import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Subscribe from '../components/Subscribe/Subscribe'

function HomeWrapper() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='page'>
                <Outlet />
                <Subscribe />
            </main>
            <Footer />
        </div>
    )
}

export default HomeWrapper
