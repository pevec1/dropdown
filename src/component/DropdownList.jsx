import "../css/main.css";

function DropdownList({state}) {
    console.log(state)
  return state === true ? (
    <ul data-id="dropdown" className="dropdown">
      <li className="active">
        <a href="#">Profile Information</a>
      </li>
      <li>
        <a href="#">Change Password</a>
      </li>
      <li>
        <a href="#">Become PRO</a>
      </li>
      <li>
        <a href="#">Help</a>
      </li>
      <li>
        <a href="#">Log Out</a>
      </li>
    </ul>
  ) : null;
}

export default DropdownList;
