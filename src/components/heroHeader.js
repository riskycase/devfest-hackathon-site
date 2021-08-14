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
      const texts = [
        {
          sender: "Risky",
          content: <p>What are stocks or shares?</p>
        },
        {
          sender: "John",
          content: (
            <p>
              Stocks are simply the shares that are in the company. Share means
              one certain part of the company. The bigger the company is, the
              larger shares will be there, And every share will have a cost.
              Thus you are buying a part of the company, and you have faith in
              it. So let’s assume that you have an Internet and mobile
              connection of Jio, and you feel that Jio has made your life
              easier. Therefore, you feel that Jio is an excellent company, you
              know you are a customer of Jio and there are a lot of people who
              are using their services, so you think “Why don’t I buy some
              shares of this company?” Then in this way, you are showing
              confidence in the company. And this is stock Investment. It is
              your commitment to a certain company and its future.
            </p>
          )
        },
        {
          sender: "Risky",
          content: <p>What does buying stocks mean? Why DEMAT account?</p>
        },
        {
          sender: "John",
          content: (
            <p>
              Today, everything is Digital. And you hold stocks which you buy in
              something called a DEMAT account. So a DEMAT account has all your
              stocks or shares which you have purchased from different
              companies. So you need a DEMAT account to buy and sell stocks.
            </p>
          )
        },
        {
          sender: "Risky",
          content: (
            <p>
              Which stocks should I pay to buy? How many should I buy? How long
              should I keep?
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              Hmm. so these are all the natural questions an early investor has
              with the stock market. And these can be extremely intimidating.
              There are a lot of strategies one might use while doing stock
              marketing. There is this one thing you need to understand, if you
              want to be really good at it, it does require a lot of time. And
              there are people who do this full-time. For some people, this is
              their profession to invest in the stock market, and they come up
              with their own strategies of how much to spend, what should be the
              quantity and how long it should be kept. Now, you won’t be able to
              think about them because you have your own job, own things to do,
              and I totally get that. So you can do what’s already there in the
              market, that is Mutual Funds.
            </p>
          )
        },
        {
          sender: "Risky",
          content: <p>What are mutual funds?</p>
        },
        {
          sender: "John",
          content: (
            <p>
              Mutual funds are a portfolio of Stock, which is being managed by
              someone, lets name him fund manager, and that fund manager has a
              target of return which is the return that you get on your money,
              and because of that he buys a group of shares or stocks, and you
              invest in the fund manager’s stock portfolio, and based on his
              expertise, his analysis and research team, he invests in those
              stocks. Now, mutual funds have been there for a long time. And
              hence there are few cons about it. Firstly,They are not
              Transparent, which means the stocks belong to someone else. So in
              your account you will only see some units of the mutual fund,
              which you buy. so , instead of buying stocks or shares of a
              company, you are buying units of a mutual fund. Secondly, you have
              to pay fees called fund fees or a manager’s fees as your money is
              being managed by someone else. So there is always some money which
              gets deducted when investing.
            </p>
          )
        },
        {
          sender: "Risky",
          content: (
            <p>
              Why don’t you suggest some platforms or ways for my early
              investing?
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              Okay, so I found something really really interesting, and that’s
              called smallcase, an independent company connected to Zerodha. And
              what they do is, think of it like a portfolio of stocks or shares
              but with no negative of what a mutual fund does. Smallcase is a
              name given to a group of portfolios, so my personal pick for you
              is the smallcase called “all-weather investing.” If you want to
              invest with a low risk, then its the best way to invest. So this
              small case consists of equity/stocks, debt and gold, a mixed
              portfolio.
            </p>
          )
        }
      ].map((text, index) =>
        text.sender === "John" ? (
          <div key={index} className={Styles.textBody + " " + Styles.left}>
            <div className={Styles.textSender}>{text.sender}</div>
            <div className={Styles.textContent}>{text.content}</div>
          </div>
        ) : (
          <div key={index} className={Styles.textBody + " " + Styles.right}>
            <div className={Styles.textContent}>{text.content}</div>
          </div>
        )
      );
      return (
        <div className="hero-header">
          <div className="headline">{data.site.siteMetadata.home.title}</div>
          <div className={Styles.textsContainer}>{texts}</div>
        </div>
      );
    }}
  />
);
