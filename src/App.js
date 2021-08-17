import Input from "./components/Input.js"
import HouseInfo from "./components/HouseInfo.js"
import { useState } from 'react';

function App() {
  const [currentHouseName, setCurrentHouseName] = useState("")
  return (
    <div className="root">
      <Input setCurrentHouseName={setCurrentHouseName} />
      <HouseInfo currentHouseName={currentHouseName} />
    </div>
  );
}

export default App;
