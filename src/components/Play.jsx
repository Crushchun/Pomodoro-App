import Button from "@mui/material/Button";
import { useState } from "react";


const Play = (props) => {

    const [label, setLabel] = useState('Start')

    const handleLabel = () => {
        props.start()
        setLabel((prevLabel) => (prevLabel === "Start" ? "Stop" : "Start"))
    }

    return <Button variant="contained" onClick={handleLabel}>{label}</Button>;
};

export default Play;