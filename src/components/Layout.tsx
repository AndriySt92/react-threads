import { Outlet, useNavigate } from "react-router-dom"
import { Header, NavBar, Container } from "./index"
import { useAppSelector } from "../app/hooks"
import { selectIsAuthenticated } from "../features/user/userSlice"
import { useEffect } from "react"

export const Layout = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth")
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className="flex-2 p-4">
          <NavBar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </Container>
    </>
  )
}
