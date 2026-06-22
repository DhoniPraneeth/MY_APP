import { useState } from "react";

function Objects(){
    const [obj,setObj]=useState({});
    const handleClick=()=>{ 
        setObj(prevObj=>({
                ...prevObj,
                name:"Praneeth",
                age:19,
                address:{
                    city:"Bengaluru",
                    place:"Mahadevpuram"
                }
            })
        );
    }
    return (<>
        <h3>Updating Objects</h3>
        <button onClick={handleClick}>Update</button>
        <h5>Objects: {JSON.stringify(obj)}</h5>
    </>);
}
export default Objects;