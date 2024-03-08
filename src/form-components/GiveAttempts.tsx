import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    let requestedNum = parseInt(attemptsRequested)
        ? parseInt(attemptsRequested)
        : 0;
    requestedNum = requestedNum < 0 ? 0 : requestedNum;

    function updateAttempts(change: number) {
        setAttempts(attempts + change);
    }

    function updateAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setAttemptsRequested(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Group controlId="formAnswer">
                <Form.Label>Attempts to Request:</Form.Label>
                <Form.Control
                    value={attemptsRequested}
                    onChange={updateAttemptsRequested}
                    type="number"
                />
            </Form.Group>
            <Button onClick={() => updateAttempts(-1)} disabled={attempts <= 0}>
                Use
            </Button>
            <Button onClick={() => updateAttempts(requestedNum)}>Gain</Button>
        </div>
    );
}
