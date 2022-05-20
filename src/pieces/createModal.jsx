import { React, useState } from 'react'
import {FaTrash } from 'react-icons/fa';


let uniID = 0

function CreateModal(props) {


    const [one_title, setTitle] = useState("")
    const [one_description, setDescription] = useState("")



    const [one_input, input_list] = useState({})


    

    function form_function(e) {
        e.preventDefault()


        input_list({id:uniID++, title:one_title, description:one_description})

        console.log(one_input)



        let uni_holder = uniID++

        let post_box_obj = {id:uni_holder, title:one_title, description:one_description, replies:[]}
        

        let a_new_obj = {}
        
        a_new_obj[uni_holder] = post_box_obj

        props.setPost([...props.post_list, post_box_obj])


    }

    return (
    <div>

        <div className="modal_container">
            <div className="modal">
                {/* createModal */}

                <form className="post_form">

                    <h2> New Post</h2>

                    <label > 
                    <input className="title" type="text"
                    
                    onChange={(e) => {
                        
                        setTitle(e.target.value)

                    
                        }}></input>
                    </label>

                    <label >
                    <textarea className="description" type="text" size="0"
                    onChange={(e) => {
                        
                        setDescription(e.target.value)


                        
                        }}
                    ></textarea>
                    </label>

                    <button className="form_submit_btn" type="submit" onClick={form_function}>Submit</button>
                </form>
                <button className="modal_close_btn"><FaTrash onClick = {() => props.isVisibleFunc_btn()} /></button>
            </div>
            
        </div>


    </div>
  )
}

export default CreateModal