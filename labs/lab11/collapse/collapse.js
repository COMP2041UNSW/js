(function() {
  'use strict';
  const NUM_CARDS = 2;
  const cards = Array(NUM_CARDS).fill(0).map((_,i) =>`item-${i+1}`);
  cards.map(card =>
    document.getElementById(card).addEventListener('click', toggle)
  );

  function toggle(e) {
    const content = document.getElementById(`${e.target.id}-content`);
    content.style.display = 'none';
  }
}());
