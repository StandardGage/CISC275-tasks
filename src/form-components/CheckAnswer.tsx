import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <FormGroup controlId="checkAnswer">
                <FormLabel>Check Answer</FormLabel>
                <FormControl value={answer} onChange={updateAnswer} />
            </FormGroup>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
