import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Yea from "../assets/yea.png";

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
          <img src={Yea} alt="card" className="post-img1" />
          {/* </Link> */}
        </div>
        <div className="texts">
          {/* <Link to={`/post/${_id}`}> */}
          <h1 className="post-title">Congratulations, you made it!</h1>
          {/* </Link> */}
          <p className="info" md={6}>
            <p className="author"> Chat GPT</p>
            <p>
              {` ${currentDate.getDate()}/${
                currentDate.getMonth() + 1
              }/${currentDate.getFullYear()}`}
            </p>
          </p>
          <p className="content">
            To all the students who recently completed the Full Stack Web
            Development course at DCI Digital Career Institute Berlin,
            congratulations! This is a tremendous achievement, and you should be
            proud of yourselves for all the hard work and dedication you put
            into this course. Over the past year, you have gained a wealth of
            knowledge and practical experience in web development. You have
            learned about HTML, CSS, JavaScript, React, Node.js, databases, and
            more. You have worked on real-world projects and developed the
            skills necessary to succeed in the industry.
            <br />
            <br />
            But your accomplishments go beyond just the technical skills you
            acquired. You have also demonstrated a strong work ethic,
            perseverance, and a willingness to learn and grow. These are
            qualities that will serve you well throughout your career. I hope
            that you take the time to reflect on your achievements and celebrate
            your success. Completing a Full Stack Web Development course is no
            small feat, and you should be proud of yourselves for making it to
            the finish line.
            <br />
            <br />
            As you move forward in your career, remember that learning is a
            lifelong journey. The skills you acquired during this course will
            serve as a foundation for your future growth and development. Keep
            pushing yourself, stay curious, and never stop learning. Finally, I
            want to extend my congratulations once again. You have earned this
            achievement, and I have no doubt that you will go on to achieve even
            greater things in your careers. Good luck, and I wish you all the
            best in your future endeavors!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
