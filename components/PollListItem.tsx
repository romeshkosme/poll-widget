import React from "react";
import styled from "styled-components";

interface IPollListItem {
    id: number,
    label: string,
    percentage?: number,
    votedFor?: boolean,
    readOnly?: boolean,
    onSelect: Function
}

const PollItemButton = styled.button<{ $voted?: boolean, $percentage?: number, $votedFor: boolean }>`
    display: block;
    height: 40px;
    width: 100%;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    padding: 0 10px;
    background: ${props => props.$voted && props.$percentage ? `linear-gradient(to right, ${props.$votedFor ? `#CCD5AE` : `#FEFAE0`} ${props.$percentage}%, transparent ${props.$percentage}%)` : `#FEFAE0`};
    color: #D4A373;
    font-size: 1rem;
`;

export default function PollListItem({id, label, percentage, votedFor = false, readOnly = false, onSelect}: IPollListItem) {
    const onHandleSelect = () => {
        if (!readOnly) onSelect(id)
    }
    return (
        <>
            <PollItemButton $voted={readOnly} $percentage={percentage} $votedFor={votedFor} onClick={onHandleSelect}>
                <span className="float-left">
                    {label}
                </span>
                {readOnly && <span className="float-right">
                    {percentage} %
                </span>}
            </PollItemButton>
        </>
    );
}