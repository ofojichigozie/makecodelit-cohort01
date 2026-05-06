import { Link } from 'react-router-dom';

function HomePage(){
  return (
    <>
    <nav>
      <Link to="/register">Register</Link> {" "}
      <Link to="/login">Login</Link>
    </nav>
    </>
  )
}

export default HomePage;