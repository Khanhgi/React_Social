import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                <span className="postUserName">Hiep huynh</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">
                chó khánh sống chó: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam? Optio quasi provident reiciendis tenetur fugit non dicta eos exercitationem at, iste sapiente voluptatibus, facere a, nesciunt possimus inventore repellendus.
                <img className="postImg" src="/assets/post/1.jpeg" alt="" />
            </span>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <span className="postLikeCounter">182</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
