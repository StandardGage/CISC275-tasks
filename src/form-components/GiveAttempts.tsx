import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [requests, setRequests] = useState<string>("0");
    const numAttempts = parseInt(attempts);

    return (
        <div>
            <FormGroup controlId="giveAttempts">
                <FormLabel>Give Attempts</FormLabel>
                <FormControl
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequests(event.target.value)
                    }
                />
            </FormGroup>
            <Button
                onClick={() =>
                    setAttempts(
                        (numAttempts + (parseInt(requests) || 0)).toString()
                    )
                }
            >
                gain
            </Button>
            <Button
                disabled={numAttempts < 1}
                onClick={() => setAttempts((numAttempts - 1).toString())}
            >
                use
            </Button>
            <div>Attempts left: {numAttempts}</div>
        </div>
    );
}
