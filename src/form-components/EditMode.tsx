import React, { useState } from "react";
import { FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <div>
                <FormCheck
                    type="switch"
                    id="is-editing"
                    label="Edit Mode"
                    checked={isEdit}
                    onChange={updateEditMode}
                />
                {isEdit && (
                    <div>
                        <FormGroup controlId="studentInfo">
                            <FormLabel>Enter Name</FormLabel>
                            <FormControl value={name} onChange={updateName} />
                        </FormGroup>
                        <FormCheck
                            id="student"
                            type="checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        ></FormCheck>
                    </div>
                )}
            </div>
            <div>{`${name} is ${isStudent ? "" : "not"} a student`}</div>
        </div>
    );
}
