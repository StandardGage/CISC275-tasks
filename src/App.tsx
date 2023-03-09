import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 -Gage Schuster with React Hooks and TypeScript
            </header>
            <hr></hr>
            <h1>Hello There</h1>
            <img
                src="https://picsum.photos/id/238/200/300"
                alt="pic didn't load"
            ></img>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr /> Hello World
            <CycleHoliday></CycleHoliday>
            <ul>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            {/* <header>Container</header> */}
            <Container className="Container">
                <Row>
                    <Col>
                        <div className="red-box"></div>
                    </Col>
                    <Col>
                        <div className="red-box"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
