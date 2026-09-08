import React from "react";
import ReactDOM from "react-dom/client";

// Used standard quotes instead of backticks for standard strings
// const heading = React.createElement("h1", {}, "Shri Ram Jai Ram Jai Jai Ram");

// Changed 'id' to 'root' to match the standard HTML container ID
// const jsxHeading = <h1>Shri Radhe Radhe Radhe Radhe Radhe Radhe Radhe..............</h1>

const Title = () => (
<h1>Shamb Sada Shiv</h1>

);

const Bio = (
<div>
    tHIS IS ELEMENT 
</div>
);

const Phone = 9999513370;

const ele = <span>Parikshit Bhatt Runner</span>

const Myfunction = function () {
return (
<div>This is functiaion i am calling</div>
);
};


const Headingcomponent = () => (
    <div className="parent">
        <Title/>
        <h2 className="heading">Jai Shri Ram</h2>
        <h3>{Bio}</h3>
        <p>Phone {Phone}  {ele}</p>
        {Myfunction()}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent/>);