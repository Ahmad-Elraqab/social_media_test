import React, { Component, useState } from "react";
import "./post_component.scss"
import Photo from "../../icons/33.jpg"
import Clock from "../../icons/clock.png"
import Option from "../../icons/options.png"
import Like from "../../icons/like.png"
import Message from "../../icons/message.png"
import Bookmark from "../../icons/bookmark.png"
import Delete from "../../icons/delete.png"
import View from "../../icons/view.png"
import Comment from "../../icons/comments.png"

const PostComponent = (props) => {

    const [show, setShow] = useState(false)
    return (

        <div className="post-bar">

            <div className="post_topbar">
                <img src={Photo} alt="" />
                <div className="title">
                    <h3>John Doe</h3>
                    <div className="sub_desc">
                        <img src={Clock} alt="" />
                        <h5>3 min ago</h5>
                    </div>
                </div>
                <img src={Option} alt="" className="float-right" />
            </div>

            <div className="action_bar">
                <h3>{props.title}</h3>
                <div>
                    <img src={Bookmark} alt="" />
                    <img src={Message} alt="" />
                    <img onClick={() => props.delete(props.id)} src={Delete} alt="" />
                </div>
            </div>

            <div className="body_text">
                <h4>
                    {props.body}
                </h4>
            </div>

            <div className="divider"></div>

            <div className="bottom_action_bar">
                <div className="likes"><img src={Like} alt="" /><h5>+500 likes</h5></div>
                <div className="comments" onClick={() => setShow(!show)}><img src={Comment} alt="" /><h5>+126 comments</h5></div>
                <div className="views"><img src={View} alt="" /><h5>+1.5K views</h5></div>
            </div>

            {show ? props.children : null}
        </div>
    )

}


export default PostComponent