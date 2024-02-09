import "../css/main.css";

function DropdownList({state}) {
    console.log(state)
  return state === true ? (
    <ul data-id="dropdown" className="dropdown open">
      <li className="">
        <a href="https://axacode.ru">Profile Information</a>
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
  ) : (
    <ul data-id="dropdown" className="dropdown active">
      <li className="">
        <a href="https://axacode.ru">Profile Information</a>
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
  );
}

export default DropdownList;
