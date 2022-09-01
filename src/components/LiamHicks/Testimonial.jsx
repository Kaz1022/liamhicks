import React from 'react';
import '../../Sass/Testimonial.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function Testimonial() {
  return (
    <div className="t-wrapper">
      <div className="t-container">
          <div className="t-header">
          <FontAwesomeIcon icon={faQuoteRight} size="xl" />
          <div className="t-review">
            <span>The Heron's Song is a historical fiction set in the time immediately following the French and Indian War 1754-60. The place is Fort Detroit's environs. The backdrop is Pontiac's siege of the fort. Brian Baynton has shown himself to be an excellent storyteller and his 'Tale in the Time of Pontic's War' is action-packed from the first paragraph to the last. As an Indigenous Historian/Author, I was particularly well pleased with the attention paid by the author to accurately portray First Nation's history and culture. The characters are well developed and believable as are the fictional events. They are woven seamlessly into historical events leaving the reader with the feeling they could be reading a biography. I thoroughly enjoyed the read.</span>
            <span>Amazon Review</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
