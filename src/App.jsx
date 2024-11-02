import React, { useState } from 'react'

const App = () => {

  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');

  const handleClick = () => {
    let num1 = parseInt(decimal, 10); 
    if (num1 > 0) {
      let answer = 0;

      for (let i = 0; num1 !== 0; i++) {
        let bit = num1 & 1;
        num1 = num1 >> 1;
        answer = bit * 10 ** i + answer;
      }

      setBinary(answer); 
    } else {
      alert("You can convert only positive numbers.")
    }
  }


  return (
    <>
      <div className="w-full relative h-screen flex items-center justify-center bg-white">
        <div className="card md:w-[60%] w-[95%] h-auto p-5 bg-[#000] rounded-lg flex flex-col">
          <div className="flex md:flex-row flex-col justify-center gap-3">
            <input
              value={decimal}
              onChange={(e) => setDecimal(e.target.value)}
              placeholder="Enter a decimal number"
              type="number"
              className="bg-[#white] rounded-lg text-black w-full md:w-[70%] p-3 outline-none border-none"
            />
            <button
              onClick={handleClick}
              className="text-black bg-white px-5 md:py-0 py-3 rounded-lg transition-all duration-300 hover:scale-95"
            >
              Convert
            </button>
          </div>
          <div className="flex justify-center items-center w-full gap-3 h-auto flex-col">
            <h1 className="text-white text-center font-semibold text-3xl mt-5">
              Binary Number: {binary}
            </h1>
          </div>
        </div>

        
        <div className="absolute w-full h-auto bottom-10 flex items-center justify-center">
          <h1>Made by Khayam</h1>
        </div>
      </div>
    </>
  );
}

export default App
