import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Main from './pages/main/Main'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}