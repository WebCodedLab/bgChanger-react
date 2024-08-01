import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [parentBgColor, setParentBgColor] = useState("bg-zinc-900");

  let bgChanger = (color) => {
    setParentBgColor(`bg-${color}-600`);
  };
  return (
    <>
      <div className={`w-full h-screen ${parentBgColor} font-[Poppins] duration-200`}>
        <div className="fixed bottom-12 m-5  p-3 flex justify-center items-center rounded-md bg-white left-[40%]">
          <div className="btns flex gap-5">
            <Button color="red" text="Red" onClick={bgChanger} />
            <Button color="blue" text="Blue" onClick={bgChanger} />
            <Button color="green" text="Green" onClick={bgChanger} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
