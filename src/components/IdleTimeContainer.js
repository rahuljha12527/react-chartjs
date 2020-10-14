import React, {useState, useRef } from "react";
import IdleTimer from "react-idle-timer";

function IdleTimeContainer() {
  const [isLoggedIn,setisLoggedIn]=useState(true);
  const idleTimerRef = useRef(null);

  const onIdle = () => { 
    console.log("User is idle");
  };
  return (
    <div>
        {
            isLoggedIn?<h2>Hello Vishwas</h2>:<h2>Hello Guest</h2>
        }
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
}

export default IdleTimeContainer;
