import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);

    function flipVisibility(): void {
        setRevealed(!revealed);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {revealed && <div>Answer: 42</div>}
        </div>
    );
}
