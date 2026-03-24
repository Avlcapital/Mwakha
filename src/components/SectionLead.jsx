export default function SectionLead({ eyebrow, title, text, split = false }) {
  return (
    <div className={`section-lead${split ? ' section-lead--split' : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  )
}
