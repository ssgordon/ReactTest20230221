import React from "react";

// const FancyButton = (props) => {
//     console.log(props);
//     return (
//         <button>{ props.children }</button>
//     )
// }

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref}>{props.children}</button>
))

export default FancyButton;