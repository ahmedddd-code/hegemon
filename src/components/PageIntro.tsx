type PageIntroProps = { eyebrow: string; title: string; accent: string; text: string };

export function PageIntro({ eyebrow, title, accent, text }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="section-wrap"><span className="eyebrow">{eyebrow}</span><h1>{title}<br /><em>{accent}</em></h1><p>{text}</p></div>
    </section>
  );
}
