import React from "react";
import Profile from "./profile";
import {data} from "./data";
const App=()=>{
  return(
    <section className="posts-container">
      {
        data.map((eachObj)=>{
          const{id,title,url,thumbnailUrl}=eachObj;
          return( 
          <Profile
              key={id}
              id={id}
              thumbnailUrl={thumbnailUrl}
              title={title}
              url={url}/>)
        })
      }
    </section>
  )
}


export default App;