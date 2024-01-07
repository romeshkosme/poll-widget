import React from "react";
import PollList from "./PollList";

interface IPoll {
    max: number,
    data: any,
    readOnly?: boolean
}

export default function Poll({max, data}: IPoll) {
    return (
        <>
            <section className="poll">
                <p className="poll-title">{data.question}</p>
                <PollList
                    max={2}
                    options={data.options}
                />
            </section>
        </>
    );
}