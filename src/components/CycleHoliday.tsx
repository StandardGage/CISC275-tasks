/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const emojis: Record<string, string> = {
    Patricks: "☘️",
    Easter: "🐣",
    Halloween: "🎃",
    Thanksgiving: "🦃",
    Christmas: "🎄"
};

function advanceAlphabet(holiday: string) {
    const holidays = [
        "Christmas",
        "Easter",
        "Halloween",
        "Patricks",
        "Thanksgiving"
    ];
    const index = holidays.indexOf(holiday);
    if (index == holidays.length - 1) {
        return holidays[0];
    }
    return holidays[index + 1];
}

function advanceYear(holiday: string) {
    const holidays = [
        "Patricks",
        "Easter",
        "Halloween",
        "Thanksgiving",
        "Christmas"
    ];
    const index = holidays.indexOf(holiday);
    if (index == holidays.length - 1) {
        return holidays[0];
    }
    return holidays[index + 1];
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Halloween");

    return (
        <>
            <Button onClick={() => setHoliday(advanceAlphabet(holiday))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(advanceYear(holiday))}>
                Advance by Year
            </Button>
            <div>{`Holiday: ${emojis[holiday]}`}</div>
        </>
    );
}
