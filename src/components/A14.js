import React, { useState, useEffect } from "react";
import axios from "axios";

const A14 = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
    }, []);
    return (
        <div>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h5>{user.login}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default A14;