import React from "react";
import Styles from "./FAQ.module.scss";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    visible: -1
  };
  toggleFAQ = index => {
    console.log(index);
    this.setState({ visible: index === this.state.visible ? -1 : index });
  };
  render() {
    const qas = [
      {
        question: (
          <div className={Styles.question}>
            Why should one invest from their 20s?
          </div>
        ),
        answer: (
          <div className={Styles.answer}>
            The main advantage of starting your investments at this point of
            life is to have more time for getting the benefits of compounding
            and free to take higher risks with a monthly salary. If you start
            investing from 20 years of age till you are 30 years old, then there
            are more chances of you not facing the dearth of money, but you will
            have to invest consistently for 10 years.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>What are stocks or shares?</div>
        ),
        answer: (
          <div className={Styles.answer}>
            Stocks are simply the shares that are in the company. Share means
            one certain part of the company. The bigger the company is, the
            larger shares will be there, And every share will have a cost. Thus
            you are buying a part of the company, and you have faith in it. So
            let’s assume that you have an Internet and mobile connection of Jio,
            and you feel that Jio has made your life easier. Therefore, you feel
            that Jio is an excellent company, you know you are a customer of Jio
            and there are a lot of people who are using their services, so you
            think “Why don’t I buy some shares of this company?” Then in this
            way, you are showing confidence in the company. And this is stock
            Investment. It is your commitment to a certain company and its
            future.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>
            What does buying stocks mean? Why DEMAT account?
          </div>
        ),
        answer: (
          <div className={Styles.answer}>
            Today, everything is Digital. And you hold stocks which you buy in
            something called a DEMAT account. So a DEMAT account has all your
            stocks or shares which you have purchased from different companies.
            So you need a DEMAT account to buy and sell stocks.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>
            Which stocks should I pay to buy? How many should I buy? How long
            should I keep?
          </div>
        ),
        answer: (
          <div className={Styles.answer}>
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
          </div>
        )
      },
      {
        question: <div className={Styles.question}>What are mutual funds?</div>,
        answer: (
          <div className={Styles.answer}>
            Mutual funds are a portfolio of Stock, which is being managed by
            someone, lets name him fund manager, and that fund manager has a
            target of return which is the return that you get on your money, and
            because of that he buys a group of shares or stocks, and you invest
            in the fund manager’s stock portfolio, and based on his expertise,
            his analysis and research team, he invests in those stocks. Now,
            mutual funds have been there for a long time. And hence there are
            few cons about it. Firstly,They are not Transparent, which means the
            stocks belong to someone else. So in your account you will only see
            some units of the mutual fund, which you buy. so , instead of buying
            stocks or shares of a company, you are buying units of a mutual
            fund. Secondly, you have to pay fees called fund fees or a manager’s
            fees as your money is being managed by someone else. So there is
            always some money which gets deducted when investing.
          </div>
        )
      },
      {
        question: <div className={Styles.question}>What about Inflation?</div>,
        answer: (
          <div className={Styles.answer}>
            Inflation is the measurement of the rate at which the price of
            substances is increasing. Let's say you are in your 20s and you want
            to retire in 50 years and you aim to reach a position where you have
            enough money that you don’t have to work anymore, your children have
            good education facilities and their responsibilities are taken care
            of. For that you need an amount. And to reach this achievement, only
            rate of return is not enough, but what’s equally important is what
            will be the value of that money at some particular instance. Hence,
            you have to look at inflation-adjusted rate of return and not just
            the rate of return.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>
            Why don’t you suggest some platforms or ways for my early investing?
          </div>
        ),
        answer: (
          <div className={Styles.answer}>
            Okay, so I found something really really interesting, and that’s
            called smallcase, an independent company connected to Zerodha. And
            what they do is, think of it like a portfolio of stocks or shares
            but with no negative of what a mutual fund does. Smallcase is a name
            given to a group of portfolios, so my personal pick for you is the
            smallcase called “all-weather investing.” If you want to invest with
            a low risk, then its the best way to invest. So this small case
            consists of equity/stocks, debt and gold, a mixed portfolio.
          </div>
        )
      }
    ].map((qa, index) => (
      <div
        key={index}
        className={Styles.qa}
        onClick={() => this.toggleFAQ(index)}
      >
        <div className={Styles.questionContainer}>
          {qa.question}
          <div className={Styles.expandIcon}>
            +
            {/* <div className={Styles.lineContainer}>
            <div className={Styles.line1} />
              </div>
              <div className={Styles.lineContainer}>
            <div className={Styles.line2} />
              </div> */}
          </div>
        </div>
        <div
          className={`${Styles.answerContainer} ${
            this.state.visible === index ? "" : Styles.hidden
          }`}
        >
          {qa.answer}
        </div>
      </div>
    ));
    return (
      <div className={Styles.faqContainer}>
        <h2>FAQs</h2>
        <div className={Styles.faqs}>{qas}</div>
      </div>
    );
  }
}

export default FAQ;
