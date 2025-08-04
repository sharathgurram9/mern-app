import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/").then((res) => res.text()).then(setData);
  }, []);

  return <h2>{data}</h2>;
}

export default App;
