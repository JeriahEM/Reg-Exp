'use client'
import { useState } from "react";
import InputComponent from "./component/InputComponent";

//objective is to change text color on out home componenet with the data from our child compononent
export default function Home() {
  const [changeText, setChangeText] = useState('');

  const changeTextFunc = (text: string) => {
    setChangeText(text)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* <input className="bg-slate-400" type="text" onChange={(e) => setChangeText(e.target.value)}/>*/}
       
      <InputComponent changeText={changeTextFunc}/>

      <p>Password must contain
        <span style={{ color: /[A-Z]/.test(changeText) ? 'blue' : 'red' }}> Uppercase, </span>
        <span style={{ color: /[0-9]/.test(changeText) ? 'blue' : 'red'}}>Number</span>
      </p>


    </main>
  );
}
