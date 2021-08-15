import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Styles from "./heroHeader.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={Styles.heroHeader}>
          <h1 className={Styles.headline}>
            {data.site.siteMetadata.home.title}
          </h1>
          <div className={Styles.introduction}>
            <p>
              We know that there&#39;s something called the Stock Market, where
              we either make money or lose. But,
            </p>
            <ul>
              <li>How exactly do we invest in stocks? </li>
              <li>What is the mechanism behind buying stocks? </li>
              <li>What does buying stocks mean? </li>
              <li>Is it risky to invest in the stock market? </li>
              <li>What should I invest in? </li>
              <li>What are mutual funds?</li>
            </ul>
            <p>
              Do these questions bother you too? Or do you feel you need to
              understand in-depth before making your first investment?
              <br />
              Come with us now on a journey through the Stock Market.
            </p>
          </div>
        </div>
      );
    }}
  />
);
