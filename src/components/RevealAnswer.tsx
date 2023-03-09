import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button onClick={() => setVisible(!visible)}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </>
    );
}
