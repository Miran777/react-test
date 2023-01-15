import React from "react"
import { useState, useEffect } from "react"
import { getPadTime } from "./getPadTime"


const Timer = (props) => {

    useEffect(() => {
        const interval = setInterval(() => {
            props.isCounting &&
            props.setTimeleft(prev => (prev >= 1 ? prev - 1 : 0))
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [props.isCounting])



    const minutes = getPadTime(Math.floor(props.timeLeft / 60))
    const seconds = getPadTime(props.timeLeft - minutes * 60)

    return (
        <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        </div>
    )
}

export default Timer