import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Settings from "./Settings";
import Play from "./Play";
import Next from "./Next";

const Timer = () => {
    const [startTimer, setStartTimer] = useState(false);
    const [time, setNewTime] = useState(TIME_SECONDS);

    const handleStartTimer = () => {
        setStartTimer(true);
    };

    useEffect(() => {
        if (startTimer) {
            const interval = setTimeout(() => {
                time > 0 && setNewTime(time - 1);
            }, 1000);
            return () => clearInterval(interval)
        }
    }), [time, startTimer];

    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Box>Focus</Box>
            <Box fontSize={"256px"}>05:00</Box>
            <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                gap={"20px"}
            >
                <Settings />
                <Play />
                <Next />
             </Box>
        </Box>
    );
};

export default Timer;