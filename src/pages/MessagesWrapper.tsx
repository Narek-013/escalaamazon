import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function HomeWrapper() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='page'>
                <Outlet />
            </main>
        </div>
    )
}

export default HomeWrapper
