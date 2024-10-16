import { useEffect, useState } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h4>Users : {users.length} </h4>
        </div>
    );
};

export default Users;