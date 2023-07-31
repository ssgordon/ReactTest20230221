import React, { useEffect } from "react";

function H02() {
    useEffect(() => {
        console.log('useEffect');
        return () => {

        }
    }, [])
    return (
        <div>TEST</div>
    )
}

export default H02