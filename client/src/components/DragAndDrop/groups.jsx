/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import interact from 'interactjs';
import React, {
  cloneElement, useState, useEffect, memo,
} from 'react';
import useStateRef from 'react-usestateref';
import BsLightbulb from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { MdLightbulbOutline } from 'react-icons/md';
import { RiOutlet2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import TestCard from './TestCard/TestCard';

import styles from './interact.module.scss';
import styles2 from './interact.module copy.scss';
import DeviceItem from './TestCard/DeviceItem';
import './LocationPage.css';
import Outlet from './TestCard/Outlet';
import ManageLamp from '../ManageDevice/Lamp/ManageLamp';
import ManageOutlet from '../ManageDevice/Outlet/ManageOutlet';

function Hero({ children }) {
  return <div>{children}</div>;
}

function Content({ children }) {
  return <div>{children}</div>;
}

function EqualColumn({ children }) {
  return (
    <div
      className="flex"
      style={{ marginLeft: '80px' }}
    >
      {children}
    </div>
  );
}

function dragMoveListener(event) {
  const { target } = event;
  // keep the grouped position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.transform = `translate(${x}px, ${y}px)`;

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

function useDraggable(
  className,
  { listeners = {}, restriction = 'parent' } = {},
) {
  useEffect(() => {
    if (typeof window !== 'undefined') { window.dragMoveListener = dragMoveListener; }

    interact(className).draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction,
          endOnly: true,
        }),
      ],
      autoScroll: true,
      listeners: {
        move: dragMoveListener,
        ...listeners,
      },
    });
  }, []);
}

const Droppable = memo(({ element, draggables }) => (
  <div id={element.id} className={`${styles.dropzone}`}>
    <p id="text-changed" className="text-change">
      {/* {element.id} */}
    </p>
    <Draggables
      grouped
      elements={draggables.filter((drag) => drag.parent == element.id)}
    />
    {element.children
          && element.children.map((child) => (
            <Droppable element={child} draggables={draggables} />
          ))}
  </div>
));

const Droppables = memo(({ elements, draggables }) => (
  <EqualColumn className="align-stretch">
    {elements.map((element, idx) => (
      <Droppable
        key={`droppable-${idx}`}
        draggables={draggables}
        element={element}
      />
    ))}
  </EqualColumn>
));

const Draggable = memo(({ id, draggable, parent }) => (
  <div>
    {/* {parent && (
    <TestCard
      id={id}
      dragClass={`flex center column ${styles.dragdrop} ${
        draggable ? styles.yesdrop : styles.nodrop
      }`}
    />
    )} */}
    {/* {!parent && ( */}

    <div
      key={Math.random()}
      id={parent ? 'none ' : id}
      className={`flex center column ${parent ? 'none' : styles.dragdrop} ${
        draggable ? styles.yesdrop : styles.nodrop
      }`}
    >

      {/* <p>{id}</p>
      <p>{parent && parent}</p> */}
      {!parent && (
        id === 'device-2' ? <MdLightbulbOutline /> : <RiOutlet2Fill />

      )}
      {parent && (
        id === 'device-2' ? <ManageLamp /> : <ManageOutlet />

      )}
    </div>
    {/* )} */}

  </div>
));

function Draggables({ grouped = false, elements }) {
  return (
    <>
      {elements
        && elements.map((drag, idx) => {
          if (!drag.parent || grouped) {
            return (
              <Draggable
                timestamp={drag.timestamp}
                key={`draggable-${idx}`}
                id={drag.id}
                draggable={drag.draggable}
                parent={drag.parent}
              />
            );
          }
        })}
      {/* <pre>{grouped && JSON.stringify(elements, null, 2)}</pre> */}
    </>
  );
}

function useDropZone(className, onDrop, onLeave, onEnter, onDeactivate) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.dragMoveListener = dragMoveListener;

    const events = {
      // listen for drop related events:
      ondropactivate(event) {
        event.target.classList.add(styles.dropactive);
        // console.log("ondropactivate", event.target.id, event.relatedTarget.id);
      },
      ondropdeactivate(event) {
        // remove active dropzone feedback
        event.target.classList.remove(styles.dropactive);
        event.target.classList.remove(styles.droptarget);
        if (onDeactivate) {
          onDeactivate({
            droppable: event.target.id,
            draggable: event.relatedTarget.id,
          });
        }
      },
      ondragenter(event) {
        const draggableElement = event.relatedTarget;
        const dropzoneElement = event.target;
        // feedback the possibility of a drop
        dropzoneElement.classList.add(styles.droptarget);
        draggableElement.classList.add(styles.candrop);
        if (onEnter) {
          onEnter({
            droppable: event.target.id,
            draggable: event.relatedTarget.id,
          });
        }
      },
      ondragleave(event) {
        // remove the drop feedback style
        event.target.classList.remove(styles.dropped);
        event.target.classList.remove(styles.droptarget);
        event.relatedTarget.classList.remove(styles.candrop);
        if (onLeave) {
          onLeave({
            droppable: event.target.id,
            draggable: event.relatedTarget.id,
          });
        }
      },
      ondrop(event) {
        event.target.classList.add(styles.dropped);
        event.relatedTarget.classList.add(styles.dropped);
        event.target.classList.remove(styles.dropzone);
        event.target.classList.remove(styles.draggable);
        // document.getElementById('text-changed').classList.add('text-change');
        // event.target.classList.add('white-text');
        if (document.getElementsByClassName(styles.dropzone).length < 1) {
          document.getElementById('unique').classList.add('white-text');
        }

        event.relatedTarget.classList.remove(styles.draggable);
        if (onDrop) {
          onDrop({
            droppable: event.target.id,
            draggable: event.relatedTarget.id,
          });
        }
      },
    };

    const dropzone = window.document.querySelectorAll(className)[0];
    interact(className).dropzone({
      accept: `.${styles.yesdrop}`,
      overlap: 0.75,
      ...events,
    });
  }, []);
}

function DropZoneDemo() {
  const [open, setOpen] = useState(false);
  const [leave, setLeave, leaveRef] = useStateRef(undefined);
  const [droppables, setDroppables, droppablesRef] = useStateRef([
    // {
    //   id: 'Room-1',
    //   children: [
    //     {
    //       id: 'Room-2',
    //       children: [
    //         {
    //           id: 'Room-3',
    //         },
    //       ],
    //     },
    //   ],
    // },
    { id: 'Connect device' },
    { id: 'Connect second device' },
  ]);

  const [draggables, setDraggables, draggablesRef] = useStateRef([
    // { id: "drag-1", draggable: false },
    { id: 'device-2', draggable: true },
    { id: 'device-3', draggable: true },
    // { id: "drag-4", draggable: true },
  ]);

  useDropZone(`.${styles.dropzone}`, onDrop, onLeave, onEnter, onDeactivate);
  useDraggable(`.${styles.dragdrop}`, { restriction: 'none' });
  useDraggable(`.${styles2.dragdrop}`, { restriction: 'none' });

  // useEffect(()=>{
  //     console.log("leave", leave)
  // }, [leave]);

  // useEffect(() => {
  //     console.log("useEffect.draggables", JSON.stringify(draggables, null, 2));
  // }, [draggables]);

  // useEffect(() => {
  //     console.log("useEffect.droppables", JSON.stringify(droppables, null, 2));
  // }, [droppables]);

  // simple and effective way to find a match in deeply nested arrays
  function findDroppable(id, elements) {
    let item;
    const matches = [];
    item = elements.flat().find((item) => {
      const found = item.id == id;
      if (!found && item.children) {
        item = findDroppable(id, item.children);
        if (item) {
          matches.push(item);
          return true;
        }
        return false;
      }
      return found;
    });
    if (item) matches.push(item);
    return matches[0];
  }

  function onDeactivate(e) {
    // console.log("onDeactivate", e);
    if (leaveRef.current == e.droppable) {
      const draggables = draggablesRef.current;
      const drag = draggables.find((item) => item.id == e.draggable);
      if (drag) {
        delete drag.parent;
        setDraggables([...draggablesRef.current]);
      }
    }
  }

  function onEnter(e) {
    // console.log("onEnter e, leaveRef", e, leaveRef.current);
    if (leaveRef.current === undefined) console.log('item moved in same zone');
    else console.log('item moved to different zone');
    setLeave(undefined);
  }

  function onLeave(e) {
    console.log('onLeave', e);
    console.log(draggables);
    setLeave(e.droppable);
  }

  function onDrop(e) {
    console.log('onDrop', e);
    const drags = draggablesRef.current;
    const drops = droppablesRef.current;

    // find the droppable element
    const drop = findDroppable(e.droppable, drops);
    console.log('findDroppable.drop found', drop);

    // find the draggable element
    const drag = drags.find((item) => item.id == e.draggable);
    console.log('drag found', drag);

    // remove previous parent reference
    if (drag.parent) {
      const parent = findDroppable(drag.parent, drops);
      parent.draggables = parent.draggables.filter(
        (item) => item.id != e.draggable,
      );
      if (parent.draggables.length == 0) delete parent.draggables;
    }

    // set the draggable parent to the droppable id
    drag.parent = e.droppable;
    drag.timestamp = Date.now();

    // add the draggable to the droppable array
    if (!drop.draggables) drop.draggables = [];
    drop.draggables.push({ ...drag, render: true });

    setDraggables([...drags]);
    setDroppables([...drops]);
  }

  function createDraggable() {
    setOpen(false);
    setDraggables((draggables) => [
      ...draggables,
      { id: `Device-${draggables.length + 2}`, draggable: true },
    ]);
  }

  function createDroppable() {
    setOpen(false);
    setDroppables((droppables) => [
      ...droppables,
      { id: `Room-${Math.random().toString(36).substring(2, 5)}` },
    ]);
  }
  // const rooms = [1, 2, 3, 4];
  const rooms = useSelector((state) => state.room);
  const deviceHandler = (roomId) => {
    const arrOfRooms = document.getElementsByClassName('text');
    for (const room of arrOfRooms) {
      room.style = 'color: white; font-weight: 400';
    }
    // dispatch(getDevice(roomId));
    document.getElementsByClassName(`text ${roomId}`)[0].style = 'color: #fddb3a; font-weight: 600';
  };

  return (
    <>
      <div className="sidebar">
        {rooms?.map((room) => (
          <div className="link" onClick={() => deviceHandler(room.id)}>
            <div className={`text ${room.id}`}>{room.title}</div>
          </div>
        ))}
      </div>
      <Hero className="center">
        {/* <div>
          <h6>Add more elements</h6>
          <button onClick={createDraggable}>Create draggable</button>
          <button onClick={createDroppable}>Create droppable</button>
        </div> */}
      </Hero>
      <EqualColumn>
        <div className={styles.dragdropdemo}>
          <div className="alldrag">
            <h3 id="unique">Drag to manage</h3>
            <Draggables elements={draggables} />
          </div>
          <Droppables elements={droppables} draggables={draggables} />
        </div>
      </EqualColumn>
    </>
  );
}
export default function Interact() {
  return (
    <Content>
      <DropZoneDemo />
      {/* <DragDemo /> */}
    </Content>
  );
}
