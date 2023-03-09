import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setProgress] = useState(false);

    return (
        <>
            <Button
                disabled={inProgress || attempts == 0}
                onClick={() => {
                    setProgress(true);
                    setAttempts(attempts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={() => setProgress(false)}>
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => setAttempts(attempts + 1)}
            >
                Mulligan
            </Button>
            <div>{attempts}</div>
        </>
    );
}
