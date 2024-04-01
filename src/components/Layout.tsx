import { Header, NavBar, Container } from "./index"

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex-2 p-4">
          <NavBar />
        </div>
      </Container>
    </>
  )
}
