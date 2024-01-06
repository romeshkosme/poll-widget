import React from "react";
import "./styles.scss";
import Poll from "./components/Poll";
import data from "./mock/quiz.json";

function App() {
    return (
        <main>
            <Poll
                max={2}
                data={data[0]}
            />
        </main>
    )
}

export default App;