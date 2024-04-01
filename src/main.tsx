import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { NextUIProvider } from "@nextui-org/react"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { ThemeProvider } from "./components"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <NextUIProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </NextUIProvider>
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
