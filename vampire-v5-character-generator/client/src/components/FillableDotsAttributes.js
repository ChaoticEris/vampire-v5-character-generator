import React, {useState} from "react";
import axios from "axios";

function FillableDotsAttributes({label}) {
    const [selectedDot, setSelectedDot] = useState(1);

    function sendAttributesToBackend(value, label) {
        axios
            .post("http://localhost:8080/api/attribute-dots", {value}, {params: {label}})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleDotClick = (dotNumber) => {
        setSelectedDot(dotNumber);
        sendAttributesToBackend(dotNumber, label);
    };

    const renderDots = () => {
        const dots = [];
        for (let i = 1; i <= 5; i++) {
            const dotClass = i <= selectedDot ? "filled" : "";

            dots.push(
                <span
                    key={i}
                    className={`dot ${dotClass}`}
                    onClick={() => handleDotClick(i)}
                ></span>
            );
        }

        return dots;
    };

    return (
        <div className={"dots-container"}>
            <label htmlFor={label} className={"attributes-label"}>
                {label}
            </label>
            {renderDots()}
        </div>
    );
}

export default FillableDotsAttributes;
