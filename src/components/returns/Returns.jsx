import "./returns.scss";

function Returns() {
  return (
    <div className="returns">
      <h1 className="returns-title">Returns & Refunds Policy</h1>
      <div className="returns-design">
        <p className="returns-design-text">
          You are entitled to cancel your order within 30 days without giving
          any reason for doing so.
        </p>
        <p className="returns-design-text">
          The deadline for canceling an order is 30 days from the date you
          received the goods or on which a third party you have appointed, who
          is not the carrier, takes possession of the product delivered.
        </p>
        <p className="returns-design-text">
          In order to exercise your right of cancellation, you must inform us of
          your decision by means of a clear statement.
        </p>
        <p className="returns-design-text">
          You can inform us of your decision by e-mail{" "}
          <a className="returns-link" href="mailto:NAME@EMAIL.COM">
            NAME@EMAIL.COM
          </a>
          .
        </p>
        <p className="returns-design-text">
          We will reimburse you no later than 30 days from the day on which we
          receive the returned goods. We will use the same means of payment as
          you used for the order, and you will not incur any fees for such
          reimbursement.
        </p>
      </div>
      <div className="returns-conditions">
        <h3 className="returns-conditions-title">Conditions for returns:</h3>
        <p className="returns-contiditions-text">
          In order for the goods to be eligible for a return, please make sure
          that:
        </p>
        <ul className="returns-conditions-list">
          <li className="returns-conditions-list-item">
            The goods were purchased in the last 30 days
          </li>
          <li className="returns-conditions-list-item">
            The goods are in the original packaging
          </li>
        </ul>
        <p className="returns-conditions-text">
          The following goods cannot be returned:
        </p>
        <ul className="returns-conditions-list">
          <li className="returns-conditions-list-item">
            The supply of goods made to your specifications or clearly
            personalized.
          </li>
          <li className="returns-conditions-list-item">
            The supply of goods which according to their nature are not suitable
            to be returned, for example goods which deteriorate rapidly or where
            the date of expiry is over.
          </li>
          <li className="returns-conditions-list-item">
            The supply of goods which are not suitable for return due to health
            protection or hygiene reasons and were unsealed after delivery.
          </li>
          <li className="returns-conditions-list-item">
            The supply of goods which are, after delivery, according to their
            nature, inseparably mixed with other items.
          </li>
        </ul>
        <p className="returns-conditions-text">
          We reserve the right to refuse returns of any merchandise that does
          not meet the above return conditions at our sole discretion.
        </p>
      </div>
      <div className="returns-design">
        <h3 className="returns-design-title">Returning Goods</h3>
        <p className="returns-design-text">
          You are responsible for the cost and risk of returning the goods to
          us. You should send the goods to the following address:
        </p>
        <p className="returns-design-text">YOUR BUSINESS ADDRESS</p>
        <p className="returns-design-text">
          We cannot be held responsible for goods damaged or lost in return
          shipment. Therefore, we recommend an insured and trackable mail
          service. We are unable to issue a refund without actual receipt of the
          goods or proof of received return delivery.
        </p>
      </div>
      <div className="returns-design">
        <h3 className="returns-design-title">Gifts:</h3>
        <p className="returns-design-text">
          If the goods were marked as a gift when purchased and then shipped
          directly to you, you'll receive a gift credit for the value of your
          return. Once the returned product is received, a gift certificate will
          be mailed to you.
        </p>
        <p className="returns-design-text">
          If the goods weren't marked as a gift when purchased, or the gift
          giver had the order shipped to themselves to give it to you later, We
          will send the refund to the gift giver.
        </p>
      </div>
      <div className="returns-design">
        <h3 className="returns-design-title">Contact Us</h3>
        <p className="returns-design-text">
          If you have any questions about our Returns and Refunds Policy, please
          contact us by e-mail{" "}
          <a className="returns-link" href="mailto:NAME@EMAIL.COM">
            NAME@EMAIL.COM
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Returns;
