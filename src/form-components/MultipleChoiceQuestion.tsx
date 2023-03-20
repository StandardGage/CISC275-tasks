import React, { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [question, setQuestion] = useState<string>(options[0]);
    function updateQuestion(event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestion(event.target.value);
    }

    return (
        <div>
            <FormGroup controlId="questions">
                <FormLabel>Multiple Choice Questions</FormLabel>
                <FormSelect value={question} onChange={updateQuestion}>
                    {options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </FormSelect>
            </FormGroup>
            <div>{question === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
