const facts = [
  ['100%', 'мужской формат'],
  ['01 × 01', 'индивидуальный приём'],
  ['4', 'принципа приватности'],
  ['0', 'лишних разговоров'],
];

export function TrustStrip() {
  return <section className="trust-strip"><div className="section-wrap">{facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>;
}
