import { comments } from "@/libs/comments";

export const Reply = ({ userImagePath, username, replyText, likeNum }) => {

  userImagePath=[comments.replies.userImagePath]
  // {comments.map((com)=>(
  //   username=[com.replies.username],
  //   userImagePath={com,replies,userImagePath}
  // ))}
  return (

    <div className="d-flex gap-2 my-2 ps-5">
    {userImagePath}
    <div
      className="rounded rounded-3 p-2"
      style={{ backgroundColor: "#3A3B3C" }}
    >
      <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
          {/* {comments.map(()=>(
            [replies]
          ))} */}
          {username}
      </span>
      <br />
      <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>2 คน</span>
      </div>
    </div>
  </div>
  )
};
