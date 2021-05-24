import React from "react"
import GlowButton from "../GlowButton/GlowButton"
import GlowSelectBox from "../GlowSelectBox/GlowSelectBox"
import CustomSlider from "../CustomSlider/CustomSlider"

// Styling
import "./Navbar.scss"

const Navbar = (props) => {
    return (
        <nav> 
            <div className="title">
                <h1 className="sorting-visualizer"><u>Sorting Visualizer</u></h1>
            </div>
            <div className="changes">
                <div className="slides">
                    <div className = "speedSlider">
                        <CustomSlider
                            className = "speed"
                            sliderVal = {props.speed}
                            min = {10}
                            max = {1000}
                            speed = {props.speed}
                            handleSpeed = {props.handleSpeed}
                            sorting = {props.sorting}
                            />
                    </div>
                    <div className = "sizeSlider">
                        <CustomSlider
                            className = "size"
                            sliderVal = {props.size}
                            min = {5}
                            max = {100}
                            size = {props.size}
                            handleSize = {props.handleSize}
                            sorting = {props.sorting}
                        />
                    </div>
                </div>
                <div className = "buttons">
                    <div className="top">
                        <span className="algorithm">
                            <GlowSelectBox 
                                algorithm = {props.algorithm}
                                handleAlgorithm = {props.handleAlgorithm}
                                sorting = {props.sorting}
                            />
                        </span>
                        <span className="random">
                            <GlowButton 
                                className = "randomizebtn"
                                text="Randomize" 
                                color ="aqua" 
                                icon ="fas fa-random fa-1x"
                                handleRandomize = {props.handleRandomize}
                                sorting = {props.sorting}
                            />
                        </span>
                    </div>
                    <div className="bottom">
                        <span className="details">
                            <GlowButton 
                                className="detailsbtn"
                                text="Details" 
                                color="aqua" 
                                icon ="fas fa-info-circle fa-1x"
                                handleDetails = {props.handleDetails}
                            />
                        </span>
                        <span className="sort">
                            <GlowButton 
                                className="sortbtn"
                                text="Sort" 
                                color="lime" 
                                icon ="fas fa-power-off fa-1x"
                                handleSort = {props.handleSort}
                                sorting = {props.sorting}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 

