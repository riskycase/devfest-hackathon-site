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
          content: (
            <p>
              What are <strong>stocks</strong>?
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              <strong>John</strong>: Stocks are simply the shares a company has
              at present. A <strong>share</strong> is a certain part of the
              company. The bigger the company is, the larger shares are present,
              and every share will have a <strong>price</strong>. You need have
              faith in it&#39;s <strong>growth</strong>, since you&#39;ll be
              buying a part of it.
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              So let&#39;s assume that you own couple of <strong>Jio</strong>
              &#39;s products &amp; you&#39;re pretty satisfied with it. You
              feel Jio has made your life easier. You know that being a customer
              who&#39;s <strong>satisfied</strong> with their services and aware
              that there are a lot more people out there who are using their
              services. So now you feel,
              <strong>&quot;Why don&#39;t I buy some of Jio</strong>&#39;s{" "}
              <strong>shares?&quot;</strong>
              This is called as a <strong>Stock Investment</strong>. You
              invested in Jio since you&#39;re confident about it&#39;s growth
              &amp; <strong>commited</strong> to it and it&#39;s{" "}
              <strong>future</strong>.
            </p>
          )
        },
        {
          sender: "Risky",
          content: (
            <p>
              What does buying stocks mean? What is a <strong>DEMAT</strong>{" "}
              account?
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              We&#39;re living in a <strong>digital</strong> world. Stocks can
              be bought and sold digitally. Your stocks or shares which you have
              purchased from
              <strong>different</strong> companies are held in something called
              a <strong>DEMAT</strong> account. Therefore, you need a DEMAT
              account to buy and sell stocks.
            </p>
          )
        },
        {
          sender: "Risky",
          content: (
            <p>
              What stocks to buy? How <strong>many</strong> should I buy? How{" "}
              <strong>long</strong> should I keep?
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              Hmm. So these are all the <strong>natural</strong> questions an
              early investor has regarding the stock market, and these can be
              extremely <strong>intimidating</strong>. There are a lot of{" "}
              <strong>strategies</strong> one might use while
              <strong>trading</strong> in the stock market. If you want to{" "}
              <strong>understand</strong> it quite a bit, it requires a lot of{" "}
              <strong>time</strong> &amp; <strong>experience</strong>.
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              There are people who do this <strong>full-time</strong>. It&#39;s
              their profession to invest in the stock market, and come up with{" "}
              <strong>strategies</strong> on how to spend &amp; how long it
              should be kept. Now, we know it&#39;s not{" "}
              <strong>everyone&#39;s piece of cake</strong> since we have our{" "}
              <strong>jobs</strong>,<strong>own things to deal with</strong>,
              and I totally get that.
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              So what else can you do? <strong>Mutual Funds</strong>.
            </p>
          )
        },
        {
          sender: "Risky",
          content: (
            <p>
              What are <strong>Mutual Funds</strong>?
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              Mutual funds are <strong>portfolio</strong> of a Stock, which is
              being managed by someone, Say, a <strong>Fund Manager</strong>.
              He/She has a <strong>target</strong> of return which is the{" "}
              <strong>return</strong> that you get on your investment, and
              because of that he <strong>purchases</strong> a group of shares or
              stocks. Next, you invest in his/her stock portfolio and based on
              his <strong>expertise</strong>, <strong>analysis</strong> and{" "}
              <strong>research</strong> team, he invests in those stocks.
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              Now, mutual funds have been there for a <strong>long</strong>{" "}
              time. Hence there are few <strong>cons</strong> about it.
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              <strong>Firstly</strong>, they&#39;re not{" "}
              <strong>transparent</strong>, which means the stocks
              <strong>belong to someone else</strong>. So, you&#39;re going to
              see only <strong>some units</strong> of the mutual fund which you
              buy in your account. So <strong>instead</strong> of purchasing
              stocks or <strong>shares</strong> of a<strong>company</strong>,
              you are buying <strong>units</strong> of a mutual fund.
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              <strong>Secondly</strong>, you have to pay a fee called{" "}
              <strong>fund fee</strong> or a manager&#39;s fee, since your money
              is being <strong>managed</strong> by <strong>someone else</strong>
              . So it&#39;s obvious that some money is deducted during the
              investment.
            </p>
          )
        },
        {
          sender: "Risky",
          content: (
            <p>
              Why don&#39;t you suggest some platforms or ways for my early
              investment?
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              Okay, so I found something really <strong>interesting</strong>,
              and it&#39;s called <strong>Smallcase</strong>, an{" "}
              <strong>independent</strong> company connected to{" "}
              <strong>Zerodha</strong>. The idea here is, think of it like a{" "}
              <strong>portfolio</strong>
              of stocks or shares but <strong>minus</strong> the{" "}
              <strong>negatives</strong> of mutual fund.
              <strong>Smallcase</strong> is a name given to a{" "}
              <strong>group</strong> of <strong>portfolios</strong>. I
              personally think, the smallcase called as{" "}
              <strong>All Weather Investing</strong> is the best pick for you.
              If you&#39;re looking for a <strong>low risk</strong> investment,
              then this is the best way to invest.
            </p>
          )
        },
        {
          sender: "John",
          content: (
            <p>
              To summarise, <strong>smallcase</strong> consists of{" "}
              <strong>equity/stocks</strong>,<strong>debt</strong> and{" "}
              <strong>gold</strong>, a <strong>mixed</strong> portfolio.
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
