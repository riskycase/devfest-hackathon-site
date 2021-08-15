import React from "react";
import { Link } from "gatsby";
import Styles from "./postLink.module.scss";

const PostLink = ({ post }) => (
  <article className={Styles.card}>
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link>
    <header>
      <h2 className={Styles.postTitle}>
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
    </header>
  </article>
);
export default PostLink;
