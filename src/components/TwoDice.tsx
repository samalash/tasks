import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDieValue, setLeftDieValue] = useState<number>(1);
    const [rightDieValue, setRightDieValue] = useState<number>(2);

    let WinLossText = "Neither victory nor defeat";
    if (leftDieValue === rightDieValue)
        if (leftDieValue !== 1) WinLossText = "Win";
        else WinLossText = "Lose";
    return (
        <div>
            <div>
                <Button onClick={() => setLeftDieValue(d6())}>Roll Left</Button>{" "}
                <Button onClick={() => setRightDieValue(d6())}>
                    Roll Right
                </Button>
            </div>
            <div>
                <span data-testid="left-die">Left Die: {leftDieValue}</span>
            </div>
            <div>
                <span data-testid="right-die">Right Die: {rightDieValue}</span>
            </div>
            <div>{WinLossText}</div>
        </div>
    );
}
