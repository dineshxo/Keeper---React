import React from "react";



const UserData=(props)=>{
    return (
      <div>
        <h2>{props.userName}</h2>
         <p>{props.userEmail}</p>
      </div>
    )
  }


  export default UserData;