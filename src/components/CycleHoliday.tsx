import React, { useState } from "react";
import { Button } from "react-bootstrap";
// 🎄🐰🎃🎆🦃
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎆");
    function setHolidayAlphabet() {
        let newHoliday = "";
        if (holiday === "🎄") newHoliday = "🐰";
        else if (holiday === "🐰") newHoliday = "🎃";
        else if (holiday === "🎃") newHoliday = "🎆";
        else if (holiday === "🎆") newHoliday = "🦃";
        else newHoliday = "🎄";
        setHoliday(newHoliday);
    }
    function setHolidayDate() {
        let newHoliday = "";
        if (holiday === "🎄") newHoliday = "🐰";
        else if (holiday === "🐰") newHoliday = "🎆";
        else if (holiday === "🎆") newHoliday = "🎃";
        else if (holiday === "🎃") newHoliday = "🦃";
        else newHoliday = "🎄";
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={setHolidayAlphabet}>Alphabet</Button>
            <Button onClick={setHolidayDate}>Year</Button>
        </div>
    );
}
