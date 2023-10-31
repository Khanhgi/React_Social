import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input placeholder="what's in your mind safak?" className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOpntion">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOpntion">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tags</span>
                    </div>
                    <div className="shareOpntion">
                        <Room  htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOpntion">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}