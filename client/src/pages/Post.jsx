import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accountant from "../assets/accountant.png";

// const { id } = useParams();

const Post = () => {
  const [postInfo, setPostInfo] = useState(null);
  //     useEffect(() = {
  //         fetch(`http://localhost:5000/post/${id}`)
  //         .then(res => {
  //             res.json()
  //             .then(postInfo => {
  // setPostInfo(postInfo)
  //             })
  //         })
  //     }, [])

  const currentDate = new Date();
  return (
    <div className="post">
      <div className="post-section">
        <div className="image">
          {/* <Link to={`/post/${_id}`}> */}
          <img src={Accountant} alt="card" className="post-img" />
          {/* </Link> */}
        </div>
        <div className="texts">
          {/* <Link to={`/post/${_id}`}> */}
          <h1>Title</h1>
          {/* </Link> */}
          <p className="info">
            <p className="author"> Author username</p>
            <p>
              {`${currentDate.getDate()}/${
                currentDate.getMonth() + 1
              }/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`}
            </p>
          </p>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur similique ut debitis error, beatae consequatur officiis
            voluptas officia maiores iusto ipsam recusandae neque qui! Rem a,
            perferendis quis cum esse, beatae consequuntur reprehenderit labore
            atque tenetur fuga facere impedit mollitia.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
