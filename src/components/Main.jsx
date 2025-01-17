import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="mx-1 my-5 p-1">
      <Outlet />
    </main>
  )
}

export default Main
