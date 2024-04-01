import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { NextUIProvider } from "@nextui-org/react"
import { store } from "./app/store"
import "./index.css"
import { Layout, ThemeProvider } from "./components"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
  Auth,
  CurrentPost,
  Followers,
  Followings,
  Posts,
  UserProfile,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <CurrentPost />,
      },
      {
        path: "users/:id",
        element: <UserProfile />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "followings",
        element: <Followings />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <NextUIProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </NextUIProvider>
  </Provider>,
)
