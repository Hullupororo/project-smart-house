// import React from 'react';
// import ReactDOM from 'react-dom';
// import DraggableGroups from './groups';

// import './styles.css';

// const draggableOptions = {
//   onmove: (event) => {
//     const { target } = event;
//     // keep the dragged position in the data-x/data-y attributes
//     const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
//     const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

//     // translate the element
//     target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;

//     // update the posiion attributes
//     target.setAttribute('data-x', x);
//     target.setAttribute('data-y', y);
//   },
//   handleDrop(event) {
//     console.log('DROP', event);
//   },
// };

// export default function DragAndDrop() {
//   return (
//     <DraggableGroups />
//   );
// }
