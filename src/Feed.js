import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://st1.bollywoodlife.com/wp-content/uploads/2020/07/Salman-Khan.jpg"
        message="wow salman"
        username="beingSalman"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvydJLi0FT6O1XCUEdYVNy606kN_MB_EZKmg&usqp=CAU"
      />
      <Post image="https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/1/e7/1e7b669e-ba1f-11ea-a81d-af582bc93204/5efa0c953ba6d.image.jpg?resize=400%2C300" />
      <Post
        image="https://static.toiimg.com/photo/msid-69902898/69902898.jpg?resizemode=4&width=400"
        message="handsome"
        username="IamSrk"
        profilePic="https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg?1"
      />
    </div>
  );
};

export default Feed;
