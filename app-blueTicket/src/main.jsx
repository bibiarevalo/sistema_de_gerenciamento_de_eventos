import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Detalhes from './pages/Detalhes'
import ListEvent from './pages/ListEvent'
import './index.css'

const paginas = createBrowserRouter([
  { path: '/', element: <Cadastro /> },
  { path: '/listEvent', element: <ListEvent /> },
  { path: '/detalhes/:id', element: <Detalhes /> },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)
