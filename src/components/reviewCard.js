import React, { useEffect, useState } from "react";
// import { useRouter } from 'next/router';
// import { Route, Routes } from "react-router-dom";
import { Rate } from "antd";
import dayjs from "dayjs";

const reviewCard = (props) => {
  const review = props.review;
  const createdDate = review.created_At;
  const newDate = dayjs(createdDate).format("MMMM D, YYYY h:mm A");
  console.log(review);
  return (
    <div className="reviewCard">
      <div className="programCard-left">
        <p>
          <b>Star Rating: </b>
          <br />
          {/* {review.rateNumber} */}
          <Rate disabled defaultValue={review.rateNumber} />
        </p>
      </div>
      <div class="programCard-mid"></div>
      <div className="programCard-right">
  
          <section className="programCard-right-top">
            <span><b>Review: </b></span>
            <span>Date: {newDate}</span>
          </section>
          <br />
          {review.programReview}
    
      </div>
    </div>
  );
};

export default reviewCard;
