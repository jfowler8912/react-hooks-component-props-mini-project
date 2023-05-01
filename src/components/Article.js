import React from "react"

function Article ({title, date="January 1, 1970", preview, minutes}) {
    function minutesToReadIndicator (minutes) {
        let output = ""
        if (minutes < 30){
            const icon = "☕️"
            for (let i=0; i < Math.ceil(minutes/5); i++){
                output += icon
            }
        } else{
            const icon ="🍱"
            for (let i=0; i<Math.ceil(minutes/10); i++){
                output += icon
            }
        }
        return output;

    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} * {minutesToReadIndicator(minutes)} {minutes} min read</small>
            <p>{preview}</p>

        </article>

    )
}
export default Article