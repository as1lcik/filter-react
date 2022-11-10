import React from "react";
import {IoEyeSharp} from "react-icons/io5"
import {Link} from 'react-router-dom'

export default function Post({ title, body, views, author, createdAt, thumb, category, id }) {
    return (
        <div className="card my-card">
            <div className="card-image">
              <Link to={`/post/${id}`}>
              <figure className="image is-4by-3">
                    <img src={thumb} alt="" />
                </figure>
              </Link>
            </div>
            <div className="card-contend">
                <div className="has-text-centered">
                    <div className="title is-4">{title}</div>
                    <p className="has-text-grey">{author}</p>
                    <span className="has-text-grey">{category}</span>
                    <br /><br />
                    <p>{body}</p>
                    <br />
                </div>
                <div className="columns is-justify-content-space-around">
                    <div className="column is-3">
                        <p className="has-text-grey">{createdAt}</p>
                    </div>
                    <div className="column is-3">
                        <p className="has-text-grey"><IoEyeSharp color={"blue"}/>{views}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}