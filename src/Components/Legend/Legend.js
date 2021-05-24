import React from "react"

import "./Legend.scss"


const Legend = () => {
    return (
        <div>
            <h1 className = "legend-title">Legend</h1>
            <ul className = "legend-Items">
                <li className = "legend-Item-text"><span className = "legend-Item-color red"></span> - Pivot Index</li>
                <li className = "legend-Item-text"><span className = "legend-Item-color yellow"></span> - Compared Elements</li>
                <li className = "legend-Item-text"><span className = "legend-Item-color green"></span> - Sorted</li>
                <li className = "legend-Item-text"><span className = "legend-Item-color blue"></span> - Unsorted</li>
                <li className = "legend-Item-text"><span className = "legend-Item-color purple"></span> - Swapped Elements</li>
            </ul>
        </div>
    )
}

export default Legend