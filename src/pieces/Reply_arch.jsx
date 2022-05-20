import {React, useState} from 'react'
import { FaTrash } from 'react-icons/fa';




function Reply_arch(props) {


    const [new_post_state, setNewPost] = useState(props.post_list)

    const [replyState, setReplyState] = useState([])
    const [replyMsg, replyMsgFunc] = useState("")


    const [post_id, setPostid] = useState(props.postBox_id)
    




    function changeInposts(id,e) {

        e.preventDefault()

        
        console.log(id)
    
        new_post_state.filter(post => { 
            if (id == post.id) { 
                console.log(post.replies) 
                post.replies.push(replyMsg)
            }})
  

        console.log(new_post_state)
 

        
    }
    console.log(replyState)
  return (
    <div className="reply_modal_container">
       
        
        <form className="reply_modal">
        <h2>Reply</h2><br/>
        <input type="text" className="title reply_input" onChange={(e) => replyMsgFunc(e.target.value)}></input>

        <button className="one_icons all_text answer_icon form_submit_btn " onClick={(e) => changeInposts(post_id,e)} type="submit">Submit</button>

        <br/><br/><br/>

        <button className="modal_close_btn" type="button"><FaTrash onClick = {() => props.isVisibleFuncReply_btn() } /></button>



        </form>

        

    </div>
  )
}

export default Reply_arch