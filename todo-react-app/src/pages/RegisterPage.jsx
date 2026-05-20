import { useState } from 'react';

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      window.alert("Password Mismatch");
      return;
    }

    const response = await fetch("https://todomatic-xa2c.onrender.com/api/auth/register", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div id="registerContainer">
      <h1>Register into Todomatic</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value) }}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            style={{ backgroundColor: "#ff2525", color: "#ffffff" }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage;