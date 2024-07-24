import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Hms/Layout'
import Login from './Components/Hms/Authentication/Login'

function App() {
const router = createBrowserRouter([
  {

    path : '/hms',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <div>Home</div>
      }
    ]
  },
  {

    path : '/hms/login',
    element : <Login/>,
    
  }
])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
