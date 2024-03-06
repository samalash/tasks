import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    dhValue: number;
    setDhValue: (newDhValue: number) => void;
}
interface HalverProps {
    dhValue: number;
    setDhValue: (newDhValue: number) => void;
}

function Doubler({ dhValue, setDhValue }: DoublerProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: HalverProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
