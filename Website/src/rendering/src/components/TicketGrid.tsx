import Link from 'next/link';

const TicketGrid = (): JSX.Element => (
  <div className="grid grid-cols-3 gap-4">
    <div className="section h-auto text-center space-y-6 align-bottom ticket-grid-block ticket-grid-block--blue">
      <div className="slanted-spacer"></div>
      <h2>VIP Ticket</h2>
      <span>Save 20% on early bird!</span>
      <p>
        <h2>$249</h2>
        <ul>
          <li>All access pass</li>
          <li>Exclusive network lunches</li>
          <li>20% off all thousands of goods</li>
          <li>Free online catalog</li>
          <li>Print and digital ticket</li>
          <li>Unlimited customize your agenda</li>
        </ul>
      </p>
      <div className="px-6 pt-4 pb-10">
        <Link href="/tickets/attendee">
          <a className="btn--main btn--main--round">Get Tickets</a>
        </Link>
      </div>
    </div>
    <div className="section h-96 text-center space-y-6 align-bottom ticket-grid-block ticket-grid-block--yellow">
      <div className="slanted-spacer"></div>
      <h2>Regular Ticket</h2>
      <span>Save 20% on early bird!</span>
      <p>
        <h2>$199</h2>
        <ul>
          <li>All access pass</li>
          <li>Exclusive network lunches</li>
          <li>20% off all thousands of goods</li>
          <li>Free online catalog</li>
          <li>Print and digital ticket</li>
          <li>Unlimited customize your agenda</li>
        </ul>
      </p>
      <div className="px-6 pt-4 pb-10">
        <Link href="/tickets/attendee">
          <a className="btn--main btn--main--round">Get Tickets</a>
        </Link>
      </div>
    </div>
    <div className="section h-96 text-center space-y-6 align-bottom ticket-grid-block ticket-grid-block--pink">
      <div className="slanted-spacer"></div>
      <h2>Guest Ticket</h2>
      <span>Save 20% on early bird!</span>
      <p>
        <h2>$149</h2>
        <ul>
          <li>All access pass</li>
          <li>Exclusive network lunches</li>
          <li>20% off all thousands of goods</li>
          <li>Free online catalog</li>
          <li>Print and digital ticket</li>
          <li>Unlimited customize your agenda</li>
        </ul>
      </p>
      <div className="px-6 pt-4 pb-10">
        <Link href="/tickets/attendee">
          <a className="btn--main btn--main--round">Get Tickets</a>
        </Link>
      </div>
    </div>
  </div>
);

export default TicketGrid;