import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://static.toiimg.com/thumb/msid-85715194,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-41906/85715194.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{height: "40vh;"}}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                class=" d-flex justfy-content-center position-absolute top-0 rounded-pill bg-primary"
                style={{ right: 0, padding: "1px 10px" }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By : {!author ? "Unknown" : author} on{" "}
                {new Date(date).toLocaleString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
