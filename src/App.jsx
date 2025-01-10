import { RouterProvider } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import "./styles/app.css"

const App = () => {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App
