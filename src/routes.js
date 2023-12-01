import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'

const routes = [
  {
    path: '/login',
    isProtected: false,
    component: Login
  },
  {
    path: '/',
    isProtected: false,
    component: Home
  },
  {
    path: '*',
    isProtected: false,
    component: NotFound
  }
]

export default routes