// import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import router from './router'
import './App.css'

function App() {
  // return (
  //   <BrowserRouter>
  //     <Router />
  //   </BrowserRouter>
  // )
  return <RouterProvider router={router} />
}

export default App
