import {ReactNode} from "react";

export default function ProjectExpectations(expectations: {expectations: ReactNode[]}) {
    return (
        <div className="flex flex-col gap-4">
            {expectations.expectations.map((expectation, index) => (
                <p key={index}>{expectation}</p>
            ))}
        </div>
    )
}