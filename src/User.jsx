import React from "react";
import { useParams, useHistory } from "react-router-dom";

const User = () => {
    // const { location } = useLocation();
    const { fname } = useParams();
    const  location  = useHistory();
    console.log(location);
    return (
        <>
            <h1>User {fname} page</h1>
            <button onClick={() => location.goBack()}>GoBack</button>
        </>
    );
}
export default User;