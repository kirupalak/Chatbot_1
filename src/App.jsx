import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chatbot from "./components/chatbot"


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Chatbot} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
