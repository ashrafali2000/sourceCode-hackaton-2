import React, { useEffect } from "react";

const Drag = () => {
  useEffect(() => {
    const draggables = document.querySelectorAll(".task");
    const droppables = document.querySelectorAll(".swim-lane");

    const handleDragStart = (e) => {
      e.target.classList.add("is-dragging");
    };

    const handleDragEnd = (e) => {
      e.target.classList.remove("is-dragging");
    };

    const handleDragOver = (e, zone) => {
      e.preventDefault();

      const bottomTask = insertAboveTask(zone, e.clientY);
      const curTask = document.querySelector(".is-dragging");

      if (!bottomTask) {
        zone.appendChild(curTask);
      } else {
        zone.insertBefore(curTask, bottomTask);
      }
    };

    const insertAboveTask = (zone, mouseY) => {
      const els = zone.querySelectorAll(".task:not(.is-dragging)");

      let closestTask = null;
      let closestOffset = Number.NEGATIVE_INFINITY;

      els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
          closestOffset = offset;
          closestTask = task;
        }
      });

      return closestTask;
    };

    draggables.forEach((task) => {
      task.addEventListener("dragstart", handleDragStart);
      task.addEventListener("dragend", handleDragEnd);
    });

    droppables.forEach((zone) => {
      zone.addEventListener("dragover", (e) => handleDragOver(e, zone));
    });

    return () => {
      draggables.forEach((task) => {
        task.removeEventListener("dragstart", handleDragStart);
        task.removeEventListener("dragend", handleDragEnd);
      });

      droppables.forEach((zone) => {
        zone.removeEventListener("dragover", handleDragOver);
      });
    };
  }, []);

  return <div>Drag and Drop Example</div>;
};

export default Drag;
