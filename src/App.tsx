import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 -Gage Schuster with React Hooks and TypeScript
            </header>
            <h1>Hello There</h1>
            <img
                src="https://picsum.photos/id/238/200/300"
                alt="pic didn't load"
            ></img>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
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
