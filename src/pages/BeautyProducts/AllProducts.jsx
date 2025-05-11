import React from 'react';

const categories = [
  { name: 'Makeup', offer: '20% OFF', options: ['Lipstick', 'Foundation', 'Compact'] },
  { name: 'Skincare', offer: 'Flat ₹100 OFF', options: ['Moisturizer', 'Facewash', 'Sunscreen'] },
  { name: 'Haircare', offer: 'Buy 1 Get 1', options: ['Shampoo', 'Conditioner', 'Hair Oil'] },
  { name: 'Fragrances', offer: '15% Cashback', options: ['Perfume', 'Deo', 'Body Mist'] },
  { name: 'Bath & Body', offer: 'Free Loofah', options: ['Body Wash', 'Scrub', 'Lotion'] },
  { name: 'Nails', offer: '₹50 OFF', options: ['Nail Polish', 'Nail Remover'] },
  { name: 'Men', offer: 'Extra 10% OFF', options: ['Shaving', 'Beard Oil'] },
  { name: 'Appliances', offer: 'Up to 30% OFF', options: ['Straightener', 'Dryer', 'Trimmer'] },
  { name: 'Wellness', offer: 'BOGO Offer', options: ['Supplements', 'Vitamins'] },
  { name: 'Mom & Baby', offer: 'Special ₹199 Only', options: ['Baby Lotion', 'Diaper Cream'] }
];

const SidebarAccordionWithCheckboxes = () => {
  return (
    <div className="accordion" id="filterAccordion">
      {categories.map((cat, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0 ? 'true' : 'false'}
              aria-controls={`collapse${index}`}
            >
              {cat.name}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#filterAccordion"
          >
            <div className="accordion-body">
              <p className="text-success fw-bold">{cat.offer}</p>
              {cat.options.map((option, i) => (
                <div className="form-check" key={i}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`${cat.name}-opt-${i}`}
                  />
                  <label className="form-check-label" htmlFor={`${cat.name}-opt-${i}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarAccordionWithCheckboxes;
