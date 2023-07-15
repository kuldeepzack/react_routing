import React from 'react'
import "./Showhide.css"
    
    
function Showhide() {
    const [status, setStatus] = React.useState(true);
  return (
    <div className="show">
    {status ? <h1>Hello KD!!!@@</h1> : null}

    <button onClick={() => setStatus(true)}>Show</button>
    <button onClick={() => setStatus(false)}>Hide</button>

    {/* <button onClick={() => setStatus(!status)}>Toggle</button> */}
  </div>
  )
}

export default Showhide