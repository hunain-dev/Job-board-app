import { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = ({ tittle, paragh, type }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const navigate = useNavigate();
  const formhandler = (e) => {
    e.preventDefault();

    if (type === "register") {
      if (password.length < 8) {
        alert("Your password at least 8 characters");
        return;
      }

      if (password !== Cpassword) {
        alert("Please match your password with Confirm Password");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ name, email, password }));

      setname("");
      setemail("");
      setpassword("");
      setCpassword("");

      alert("form hass been submited");
      navigate("/LoginForm");
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("User not found. Please register first.");
        return;
      }

      if (email !== storedUser.email || password !== storedUser.password) {
        alert("brother your email and password was invalid");
        return;
      }

      alert("login succescfully");
      navigate("/Home");
    }
  };
  return (
    <div>
      <div className="container">
        <h2>{tittle}</h2>
        <form onSubmit={formhandler}>
          {type === "register" && (
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          )}
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <div className="password">
            <input
              type="password"
              placeholder="Create password"
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            {type === "register" && (
              <input
                type="password"
                placeholder="Confirm password"
                required
                value={Cpassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
              />
            )}
          </div>

          <Button btn={type === "register" ? "Register Now" : "Login"} />
        </form>
        <p>
          {paragh}
          <Link to={type === "register" ? "/LoginForm" : "/RegisterForm"}>
            {type === "register" ? "Login now" : "Register now"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
