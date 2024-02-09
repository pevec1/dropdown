import "./css/main.css";
import DropdownList from "./component/DropdownList";
import { useState } from "react"

function Dropdown() {
  const [state, setState] = useState(false);
  const toggleOpen = () => setState(!state)

  return (
<div className="container">
    <div data-id="wrapper" className="dropdown-wrapper open">
      <button data-id="toggle" className="btn" onClick={()=>toggleOpen()}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
        <DropdownList state={state} />
    </div>
  </div>       
  )
}

export default Dropdown;
