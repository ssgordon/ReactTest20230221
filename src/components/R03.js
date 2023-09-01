import React from "react";
import { useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom";

const R03 = (props) => {
    console.log('R03', props);
    let location = useLocation();
    let params = useParams();
    const [searchParams, setDearchParams] = useSearchParams();
    const navigate = useNavigate();
    // let match = useMatch();
    console.log('location', location);
    console.log('params', params);
    // console.log(searchParams);
    // searchParams.forEach((value, key) => {
    //     console.log(key, value);
    // });
    console.log('a=' + searchParams.get('a'));
    console.log('b=' + searchParams.get('b'));

    const { id, title } = location.state || {};
    console.log(id, title);

    const changeSearchParams = () => {
        setDearchParams({
            a: '333'
        });
    }
    const changeNavigate = () => {
        navigate('/R04');
    }
    return (
        <>
            <div>R03</div>
            <button onClick={changeSearchParams}>change</button>
            <button onClick={changeNavigate}>naviagte</button>
        </>

    )
}

export default R03;