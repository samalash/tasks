import React, { useState } from "react";

import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function flipIsStudent() {
        setIsStudent(!isStudent);
    }
    function flipIsEditMode() {
        setIsEditMode(!isEditMode);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {isEditMode ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={flipIsStudent}
                    />
                </div>
            ) : (
                <div>
                    <p>
                        {isStudent
                            ? name + " is a student"
                            : name + " is not a student"}
                    </p>
                </div>
            )}
            <Form.Check
                type="switch"
                id="is-editMode-check"
                label="Edit Mode"
                checked={isEditMode}
                onChange={flipIsEditMode}
            />
        </div>
    );
}
