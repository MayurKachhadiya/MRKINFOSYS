import React,{useState} from "react";
import './index.css'
import Sresult from "./Sresult";
const Search = ()=>{
    const [img, setImg] = useState();
    const inputEvent = (event)=>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return(
        <>
            <div className="searchbar">
                <input className="searchbarinput" type="text" placeholder="Seaching any img" value={img} onChange={inputEvent}/>
            </div>
            <Sresult name={img}/>
        </>
    );
}
export default Search;