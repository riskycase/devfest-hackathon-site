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
              We do know that there is something called the stock market, and we
              know that we can earn money or lose. BUT, how do we invest in
              stocks? What is the mechanism through which you buy stocks? What
              does buying stocks mean? Is it risky to invest in the stock
              market? Which stocks should you buy? What are mutual funds? - are
              these the questions bothering you too? Or do you feel you need to
              understand more concepts before making your first investment? So,
              here it is. We will be trying to clarify all those and educate
              you.
            </p>
          </div>
        </div>
      );
    }}
  />
);
