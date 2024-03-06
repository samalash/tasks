import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function updateAttemptsRemaining(change: number): void {
        setAttemptsRemaining(attemptsRemaining + change);
    }
    function flipInProgress(): void {
        setInProgress(!inProgress);
    }
    return (
        <div>
            <div>Attempts Remaining: {attemptsRemaining}</div>
            <Button
                onClick={() => {
                    flipInProgress();
                    updateAttemptsRemaining(-1);
                }}
                disabled={attemptsRemaining <= 0 || inProgress}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    flipInProgress();
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    updateAttemptsRemaining(1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
