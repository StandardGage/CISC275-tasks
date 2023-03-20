import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, chooseColor] = useState<string>();

    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => {
                return (
                    <FormCheck
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        label={color}
                        onChange={(e) => chooseColor(e.target.value)}
                        value={color}
                    ></FormCheck>
                );
            })}
            <div>You have chosen</div>
            <div data-testid="colored-box" style={{ background: chosenColor }}>
                {chosenColor}
            </div>
        </div>
    );
}
