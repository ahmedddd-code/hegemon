import { WHATSAPP_BOOKING_URL } from '../lib/contact';

export function BookingCta() {
  return (
    <section className="final-cta" id="booking">
      <div className="section-wrap final-cta__inner">
        <h2>Забота о себе —<br /><em>это по-мужски.</em></h2>
        <p>Выберите процедуру — детали спокойно обсудим перед началом.</p>
        <a className="button button--light" href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Записаться в HEGEMON <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
