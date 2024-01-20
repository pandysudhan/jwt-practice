import { useState } from "react";

function Home(props) {
  const [name, setName] = useState(props.name);
  return (
    <div className="home">
      <p>Hi {name}</p>
    </div>
  );
}
export default Home;
