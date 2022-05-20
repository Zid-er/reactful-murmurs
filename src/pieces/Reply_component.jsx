import React from 'react'

function Reply_component(props) {
  return (
    <div>

        <div className="replies_container">
            <p>{props.id+1}. {props.reply}</p>
        </div>

    </div>
  )
}

export default Reply_component