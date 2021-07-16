import { useState } from 'react';
import { StyledDepotSetup } from "./depot-setup.styled";
import initialData from '../../app/initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from '../../components';

const DepotSetup = () => {
  const [data, setData] = useState(initialData);
  const {columnOrder, columns, tasks} = data;

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(destination)

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const oldColumn = columns[source.droppableId];
    const newColumn = columns[destination.droppableId];

    const newTaskIdsInNewColumn = Array.from(newColumn.taskIds);
    const newTaskIdsInOldColumn = Array.from(oldColumn.taskIds);


    newTaskIdsInOldColumn.splice(source.index, 1);

    if (oldColumn.id !== newColumn.id) {
      newTaskIdsInNewColumn.splice(destination.index, 0, draggableId);
    } else {
      newTaskIdsInOldColumn.splice(destination.index, 0, draggableId);
    }

    setData({
      ...data,
      columns: {
        ...columns,
        [newColumn.id]: {
          ...newColumn,
          taskIds: newTaskIdsInNewColumn
        },
        [oldColumn.id]: {
          ...oldColumn,
          taskIds: newTaskIdsInOldColumn
        },
      }
    })
  };

  return (
    <StyledDepotSetup>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          columnOrder.map(columnId => {
            const column = columns[columnId];
            const tasksList = column.taskIds.map(taskId => tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasksList} />
          })
        }
      </DragDropContext>
    </StyledDepotSetup>
  );
};

export default DepotSetup;
