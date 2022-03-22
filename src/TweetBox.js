import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Julien Gérard",
      username: "Jgerard",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media.istockphoto.com/photos/red-fox-sitting-on-woodpile-picture-id1329803068?b=1&k=20&m=1329803068&s=170667a&w=0&h=Ma6aZLcQpahxXrX--m5zDRju6sltif5aeWivvYZ6Hyw=",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://media.istockphoto.com/photos/red-fox-sitting-on-woodpile-picture-id1329803068?b=1&k=20&m=1329803068&s=170667a&w=0&h=Ma6aZLcQpahxXrX--m5zDRju6sltif5aeWivvYZ6Hyw="></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox_imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
