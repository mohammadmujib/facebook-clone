import React from "react";
import "./StoryReel.css";
import Story from "./Story";
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
        profileSrc="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
        title="mohammad Hasnain"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWRIGmgn2klhIFTektSGSVooqrp9dVAoet9A&usqp=CAU"
        profileSrc="https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"
        title="mohammad mujib"
      />
      <Story
        image="https://i.imgur.com/Qyj9brM.jpg"
        profileSrc="https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png"
        title="Vaibhav"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS99iDION6UKpIDWxUZub-4WYsocsy6Fr82kQ&usqp=CAU"
        profileSrc="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
        title="Clever Qazi"
      />
      <Story
        image="https://imgix.elitedaily.com/uploads/image/2019/5/8/3a795e81-2162-4e64-a830-4f5deb907e03-en-birthday-stories-screen-2_en_us.png?w=610&fit=max&auto=format%2Ccompress&cs=srgb&q=70"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFPNhB2ypurUw-VdYfAoNAKLSLPNI79udFJg&usqp=CAU"
        title="Harshal"
      />
      {/* <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3lGVoNuxFGk6C7y8Wn_k3U5XStKTY6bercw&usqp=CAU"
        profileSrc="https://i.pinimg.com/236x/95/55/42/9555428a3d99c39c362e013a475e0db6.jpg"
        title="Ottoman"
      /> */}
    </div>
  );
};

export default StoryReel;
