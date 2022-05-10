import React, { useState } from "react";
import InputComp from "./InputComp";
import "./styles.css";

export default function App() {
  const [name, setName] = useState(""),
    [role, setRole] = useState(""),
    [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, role, location);
    setName("");
    setRole("");
    setLocation("");
  };

  // const details = `${name}-${role}-${location}`;

  return (
    <div className="App">
      <h5>
        Hi,
        <span>{name ? ` ${name}` : "..."}</span>
        <span>{role ? `-${role}` : ""}</span>
        <span>{location ? `-${location}` : ""}</span>
      </h5>
      <form onSubmit={handleSubmit}>
        <InputComp
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          label="Name"
          value={name}
        />
        <InputComp
          onChange={(e) => setRole(e.target.value)}
          type="text"
          placeholder="Enter your role"
          label="Role"
          value={role}
        />
        <InputComp
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Enter your location"
          label="Location"
          value={location}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
