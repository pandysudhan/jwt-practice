import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || ""
  );

  async function fetchEmail() {
    try {
      const response = await fetch("http://127.0.0.1:5000/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();
      setEmail(res.email);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (token === "") {
      navigate("/login")
    }
    fetchEmail();
  }, [token]);


  function handleLogout(params) {
    setToken("")
    localStorage.removeItem("access_token")
  }
  return (
    <div className="home">
      <p>Hi {email}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
export default Home;
