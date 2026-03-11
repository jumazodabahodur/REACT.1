import { useState } from "react"

const App = () => {
  const [str, setStr] = useState("")

  return (
    <div>
      <input  type="text" value={str} onChange={(e) => setStr(e.target.value)}  className="border border-black p-2 outline-none" 
      />
      <h1> {str}</h1>
    </div>
  )
}

export default App
