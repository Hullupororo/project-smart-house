import React from 'react';
import interact from 'interactjs';

export default function Dragger() {
  const position = { x: 0, y: 0 };

  interact('.draggable').draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });

  interact('dropzone')
    .dropzone({
      ondrop(event) {
        alert(`${event.relatedTarget.id
        } was dropped into ${
          event.target.id}`);
      },
    })
    .on('dropactivate', (event) => {
      event.target.classList.add('drop-activated');
    });
  return (
    <div>
      <div className="draggable">DRAGGABLE</div>
      <div className="resizable">
        <p> Resize from any edge or corner </p>
      </div>
      <div className="dropzone">IM A DIV DROP</div>

    </div>
  );
}
