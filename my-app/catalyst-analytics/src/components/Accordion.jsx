import { useState } from 'react'

export default function Accordion({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id || null)

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const isOpen = item.id === activeId

        return (
          <article key={item.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button
              className="accordion-trigger"
              onClick={() => setActiveId(isOpen ? null : item.id)}
              type="button"
            >
              <span className="accordion-count">{String(index + 1).padStart(2, '0')}</span>
              <span className="accordion-question">{item.question}</span>
              <span className="accordion-icon">{isOpen ? '×' : '+'}</span>
            </button>
            {isOpen && <p className="accordion-answer">{item.answer}</p>}
          </article>
        )
      })}
    </div>
  )
}
