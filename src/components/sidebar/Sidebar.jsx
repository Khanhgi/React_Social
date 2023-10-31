import "./sidebar.css"
import { RssFeed, Bookmarks,
        HelpOutline, Event,
        School, Group,
        PlayCircle, Chat,
} from "@mui/icons-material"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <div className="sidebarListItemText">Feed</div>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <div className="sidebarListItemText">Chat</div>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon"/>
                        <div className="sidebarListItemText">Videos</div>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <div className="sidebarListItemText">Groups</div>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className="sidebarIcon"/>
                        <div className="sidebarListItemText">Bookmarks</div>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <div className="sidebarListItemText">Questions</div>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <div className="sidebarListItemText">Events</div>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <div className="sidebarListItemText">Courses</div>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendimg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}