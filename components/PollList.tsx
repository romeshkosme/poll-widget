import React, { useState } from "react";
import PollListItem from "./PollListItem";

interface IOption {
    id: number,
    label: string,
    count?: number,
    percentage?: number,
    votedFor: boolean
}

interface IPollList {
    max: number,
    options: IOption[],
    viewOnly?: boolean
};

export default function PollList({max, options, viewOnly = false}: IPollList) {
    const [list, setList] = useState(options);
    const [readOnly, setReadOnly] = useState(viewOnly);

    const onSelect = (id: number) => {
        setList(list.map((elem: IOption) => {
            if (elem.id === id) elem.votedFor = true;
            return elem;
        }))
        setReadOnly(true);
    }
    return (
        <>
            <div className="poll-list-items">
                {
                    options.map((option: IOption, index: number) => {
                        const percentage = ((100/100) * (option.count || 0))
                        return (
                            <React.Fragment key={`poll-list-item-${index}`}>
                                <PollListItem 
                                    id={option.id}
                                    label={option.label}
                                    readOnly={readOnly}
                                    votedFor={option.votedFor}
                                    percentage={percentage}
                                    onSelect={onSelect}
                                />
                            </React.Fragment>
                        )
                    })   
                }
            </div>
        </>
    )
}