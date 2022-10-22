import React, { useState } from 'react';
import interact from 'interactjs';
import { element } from 'prop-types';
import styles from './interact.module.scss';
import altStyles from './alternative.interact.module.scss';
import TestRoom from './TestRoom';
import TestDevice from './TestDevice';

export default function TestDragAndDrop() {
  const [newParent, setNewParent] = useState('');
  const [allDevices, setAllDevices] = useState([{ id: 1, parent: '' }, { id: 2, parent: '' }]);

  function dragMoveListener(event) {
    const { target } = event;
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.transform = `translate(${x}px, ${y}px)`;

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  window.dragMoveListener = dragMoveListener;

  // enable draggables to be dropped into this
  interact('.dropzone').dropzone({
    accept: `#${styles.yesdrop}`,
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate(event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active');
      // set parent for a device
      const check = event.relatedTarget.outerHTML.split(' ')[1].replace(/\D/g, '');

      setAllDevices((prev) => prev
        .map((el) => (el.id === Number(check) ? { ...el, parent: '' } : el)));
    },
    ondragenter(event) {
      const draggableElement = event.relatedTarget;
      const dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
      draggableElement.textContent = 'Dragged in';
    },
    ondragleave(event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target');
      event.relatedTarget.classList.remove('can-drop');
      event.relatedTarget.textContent = 'Dragged out';
    },
    ondrop(event) {
      event.relatedTarget.textContent = 'Dropped';
      const check = event.relatedTarget.outerHTML.split(' ')[1].replace(/\D/g, '');
      setAllDevices((prev) => prev
        .map((el) => (el.id === Number(check) ? { ...el, parent: event.target } : el)));

      // set parent for a device
      setNewParent(event.target);
    },
    ondropdeactivate(event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active');
      event.target.classList.remove('drop-target');
    },
  });

  interact(`.${styles.dragdrop}`)
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'none',
          endOnly: true,
        }),
      ],
      autoScroll: true,
      listeners: { move: dragMoveListener },
    });

  return (
    <>
      {allDevices.map((el, index) => (<TestDevice parent={el.parent} id={el.id} />))}
      {/* <TestDevice parent={newParent} /> */}
      <TestRoom />
    </>
  );
}
