import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Coolest Header in History</h1>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "100px",
                                backgroundColor: "red",
                                width: "500px"
                            }}
                        ></div>
                        <img
                            src={require("./cool_dog.jpg")}
                            alt="Coolest dog in history"
                            width="300"
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "100px",
                                backgroundColor: "red",
                                width: "500px"
                            }}
                        ></div>
                        <ul>
                            <li>First item</li>
                            <li>Second item</li>
                            <li>Third item</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Sammy Alashoush, Hello World</p>
        </div>
    );
}

export default App;
