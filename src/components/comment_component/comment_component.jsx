import Clock from "../../icons/clock.png"
import Photo from "../../icons/33.jpg"
import Reply from "../../icons/reply.png"
import Delete from "../../icons/delete.png"
import Add from "../../icons/add.png"
import "./comment_component.scss"
import React, { Component, useState } from "react"

const CommentComponent = (props) => {

    const [num, setNum] = useState(1)
    return (
        <div>

            <div className="comment">

                <div className="divider"></div>

                {num < props.data.length ? <img onClick={() => setNum(num + 1)} src={Add} alt="" /> : null}

                {props.data.map((e, index) => index < num ?
                    [<div key={e.id} className="post_topbar">
                        <div className="title">
                            <h3>{e.name}</h3>
                            <div className="sub_desc comment_desc">
                                <img src={Clock} alt="" />
                                <h5>3 min ago</h5>
                                <h5>,</h5>
                                <h5>{e.email}</h5>
                                <img onClick={() => props.delete(e)} src={Delete} alt="" />
                            </div>
                        </div>
                    </div>
                        ,
                    <div className="body_text">
                        <h4>
                            {e.body}
                        </h4>
                    </div>
                        ,
                    <div className="reply">
                        <img src={Reply} alt="" />
                        <h4>Reply</h4>
                    </div>,
                    num > 1 ? <div className="divider"></div> : null

                    ] : null
                )}
            </div>
            ,
            <div className="comment_action">
                <img src={Photo} alt="" />
                <input placeholder="Post a comment" />
                <div className="button_post"><h4>Post</h4></div>
            </div>

        </div>
    )

}


export default CommentComponent