import React from "react";
import PollList from "./PollList";

export default function Poll({max, data, readOnly}) {
    return (
        <>
            <section className="poll">
                <p className="poll-title">{data.question}</p>
                <PollList
                    max={2}
                    options={data.options}
                    readOnly={readOnly}
                />
            </section>
        </>
    );
}