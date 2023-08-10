import { comments } from "@/libs/comments"
import { Reply } from "./Reply"

export const Comment = ({ userImagePath, username, commentText, likeNum, replies}) => {


  return (
    <div className="d-flex gap-2 my-2">
         {comments.map(()=>(
            userImagePath={userImagePath},
            username={username}
            
          ))}

        </div>

)
}