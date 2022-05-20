import {React, useState } from 'react'
import { FaPlus, FaRegUser, FaRegComment, FaRegEdit, FaHistory, FaTrash } from 'react-icons/fa';
import Reply_arch from "./Reply_arch"
import Reply_component from "./Reply_component"

function Postbox(props) {


    const [q_list, setqlist] = useState(props.prob_list)
    // const [isVisible, isVisibleFunc] = useState(false)
    const [isVisibleReply, isVisibleFuncReply] = useState(false)

    const [repliesOfm, setReplies] = useState(props.post_replies_list)



    function Reply_unpop(props) {
        isVisibleFuncReply(false)
      }

    function Reply_arch_func(props) {
        
    const isVisOr = props.isVisReply;

    if (isVisOr) {
      return <Reply_arch isVisibleFuncReply_btn={Reply_unpop} postBox_id={props.new_post_id_prop}  post_list={q_list} setPost={setqlist} post_replies={props.post_replies_list}/>
    }
    }





    let reply_list = repliesOfm
    console.log(reply_list)


    const Replies_churner = reply_list.map((reply, index) => {
        console.log("working two")   
        return <Reply_component key={index} reply={reply} id={index}/>
    })

    
  return (
    <div>

        <div className="feed_postBox"> 
            <h4>{props.title}</h4><br />
            <hr className="horiz-line"/><br />
            <p>{props.description}</p>
            <br /><br />


            <button className="answer_btn" onClick={() => isVisibleFuncReply(true) }><FaRegComment className="one_icons all_text answer_icon" /><p>Answer</p></button>






        </div>

    <Reply_arch_func isVisReply={isVisibleReply} new_post_id_prop={props.id} post_replies={props.post_replies_list}/>

 
    {Replies_churner}


    </div>



  )
}

export default Postbox