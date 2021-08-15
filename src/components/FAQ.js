import React from "react";
import Styles from "./FAQ.module.scss";

class FAQ extends React.Component {
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
            The main advantage of investing at this point of life is to obtain
            the benefits of <strong>compounding</strong> and be free to take
            higher risks with a monthly salary. If you start investing from the
            age of 20 until you&#39;re 30, there are more chances of you{" "}
            <strong>not facing the dearth</strong> of money, but you&#39;ll have
            to invest <strong>consistently for the next 10 years</strong>.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>What are stocks or shares?</div>
        ),
        answer: (
          <div className={Styles.answer}>
            Stocks are simply the shares a company has at present.
            <br />
            A share is a certain part of the company. The bigger the company is,
            the larger shares are present. <br />
            Every share has a <strong>price</strong>. You need have faith in the
            company&#39;s <strong>growth</strong>, since you&#39;ll be buying a
            part of it.
            <br />
            So let&#39;s assume that you own couple of Jio&#39;s products &amp;
            you&#39;re pretty satisfied with it. You feel Jio has made your life
            easier. You know that being a customer who&#39;s satisfied with
            their services and aware that there are a lot more people out there
            who are using their services. So now you feel,
            <strong>
              &quot;Why don&#39;t I buy some of Jio&#39;s shares?&quot;
            </strong>
            . This is called as a <strong>stock investment</strong>. You
            invested in Jio since you&#39;re confident about its growth &amp;
            committed to it and its future.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>
            What does buying stocks mean? What is a DEMAT account?
          </div>
        ),
        answer: (
          <div className={Styles.answer}>
            We&#39;re living in a digital world. Stocks can be bought and sold
            digitally. Your stocks or shares which you have{" "}
            <strong>purchased from different companies</strong> are held in
            something called a <strong>DEMAT</strong> account. Therefore, you
            need a DEMAT account to buy and sell stocks.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>
            What stocks to buy? How many should I buy? How long should I keep
            them?
          </div>
        ),
        answer: (
          <div className={Styles.answer}>
            These are all the natural questions an early investor has regarding
            the stock market, and these can be extremely intimidating. There are
            a lot of strategies one might use while trading in the stock market.
            If you want to understand it quite a bit, it requires a lot of time
            &amp; experience.
            <br />
            There are people who do this full-time. It&#39;s their profession to
            invest in the stock market, and come up with{" "}
            <strong>strategies</strong> on how to spend &amp; how long it should
            be kept.
          </div>
        )
      },
      {
        question: <div className={Styles.question}>What are mutual funds?</div>,
        answer: (
          <div className={Styles.answer}>
            Mutual funds are <strong>portfolio of a stock</strong>, which is
            being managed by someone, say, a <strong>Fund Manager</strong>. They
            have a <strong>target</strong> of return which is the{" "}
            <strong>return</strong> that you get on your investment, and because
            of that they <strong>purchases</strong> a group of shares or stocks.
            Next, you invest in their stock portfolio and based on their{" "}
            <strong>expertise</strong>, <strong>analysis</strong> and{" "}
            <strong>research</strong> team, they invest in those stocks.
            <br />
            Now, mutual funds have been there for a long time. Hence there are
            few cons about it.
            <ul>
              <li>
                They&#39;re not transparent, which means the{" "}
                <strong>stocks belong to someone else</strong>. So, you&#39;re
                going to see only some units of the mutual fund which you buy in
                your account. So{" "}
                <strong>
                  instead of purchasing stocks or shares of a company you are
                  buying units of a mutual fund
                </strong>
                .
              </li>
              <li>
                You have to pay a fee called fund fee or a manager&#39;s fee,
                since your money is being{" "}
                <strong>managed by someone else</strong>. So it&#39;s obvious
                that some money is deducted during the investment.
              </li>
            </ul>
          </div>
        )
      },
      {
        question: <div className={Styles.question}>What about Inflation?</div>,
        answer: (
          <div className={Styles.answer}>
            Inflation is the measurement of the rate at which the price of
            substances is increasing. Let&#39;s say you are in your 20&#39;s
            &amp; you want to retire at the age of 50 and you aim to reach a
            position where you have enough money that you don&#39;t have to work
            any more. Your children have good education facilities and their
            responsibilities are taken care of.
            <br />
            To reach this level, only rate of return is not enough, but
            what&#39;s equally important is what will be the{" "}
            <strong>value of that money at some particular instance</strong>.
            Hence, you have to look at{" "}
            <strong>inflation-adjusted rate of return</strong> and not just the
            rate of return.
          </div>
        )
      },
      {
        question: (
          <div className={Styles.question}>
            Why don&#39;t you suggest some platforms or ways for my early
            investment?
          </div>
        ),
        answer: (
          <div className={Styles.answer}>
            There&#39;s a company called <strong>Smallcase</strong>, an
            independent company connected to <strong>Zerodha</strong>. The idea
            here is, think of it like a portfolio of stocks or shares without
            the negatives of mutual fund. Smallcase is a name given to a{" "}
            <strong>group of portfolios</strong>. Smallcase, sometimes called as{" "}
            <strong>All Weather Investing</strong>, is the best pick for most
            individuals at their 20&#39;s. If you&#39;re looking for a low risk
            investment, then this is the best way to invest.
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
          <div
            className={`${Styles.expandIcon} ${
              this.state.visible === index ? Styles.expandedIcon : ""
            }`}
          >
            <div className={Styles.lineContainer1}>
              <div className={Styles.line1} />
            </div>
            <div className={Styles.lineContainer2}>
              <div className={Styles.line2} />
            </div>
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
