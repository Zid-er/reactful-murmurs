import { React, useState } from 'react';
import './App.css';
import { FaPlus, FaRegUser, FaRegComment, FaRegEdit, FaHistory, FaTrash } from 'react-icons/fa';
import CreateModal from "./pieces/createModal"
import Postbox from "./pieces/Postbox"
import Reply_arch from "./pieces/Reply_arch"



function App() {


  const post_list = []

  


  const [one_post, setPost] = useState(post_list)

  const [isVisible, isVisibleFunc] = useState(false)
  const [isVisibleReply, isVisibleFuncReply] = useState(false)


  function Modal_Pop(props) {

    const isVisibileOr = props.isVisible;

    if (isVisibileOr) {
      return <CreateModal isVisibleFunc_btn = {Modal_Unpop} setPost={setPost} post_list={one_post}/>
    }
  }

  
  function Modal_Unpop(props) {
    isVisibleFunc(false)
  }


  function Reply_modal(props) {

    const isVisOr = props.isVisibleReply;

    if (isVisOr) {
      return <Reply_arch isVisibleFuncReply_btn={Reply_unpop}/>
    }
  }

  function Reply_unpop(props) {
    isVisibleFuncReply(false)
  }



  console.log(one_post)
  const deCon = one_post.map(post => { 
    
    if (one_post.length >= 0 ) {
      console.log(post.id)
      
    return(
      
    <Postbox 

    title={post.title}
    description={post.description}
    key={post.id}
    id = {post.id}
    prob_list = {one_post}

    set_post = {setPost}

    replyModalF= {Reply_modal}
    unpopReplyModal = {Reply_unpop}

    isVisReply = {isVisibleReply}
    isVisReplyFunc = {isVisibleFuncReply}


    post_replies_list = {post.replies}

    />    
  )
      
    }


  })




  return (
    

    <div className="App">


      <Modal_Pop isVisible={isVisible} />


      <div className="two_side_container">

        <div className="dashboard">

          <div className="btns_container">

            
            <div className="new_post_btn">
              
            <FaPlus className="one_icons" 
            
            onClick={() => { isVisibleFunc(true) }}/>  

            <p className="all_text">New Post</p>            
            </div>


            <div className="post_history_btn">
            <FaHistory className="one_icons" />

            <p className="all_text">Post History</p>
            </div>
            
          </div>

        </div>

        <div className="avatar_box">

          
          <FaRegUser className="one_icons" />
          <p className="all_text">Lartao</p>  

        </div>

      </div>

      <div className="three_column_handler">


        <div className="feed_container"> 

          {/* {deCon} */}

          <div className="feed">

            {deCon}

          </div>
        </div>







      </div>

      

    </div>
  );
}

export default App;
