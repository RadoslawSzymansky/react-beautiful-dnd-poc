import { useState } from 'react';
import { StyledDepotSetup } from "./depot-setup.styled";
import mainFuse from '../../app/initial-fuse';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from '..';
import { StyledDepotItem } from '../depot-item/depot-item.styled';

const DepotSetup = () => {

  // to do
  // convert children to object with ids as key

  const [data, setData] = useState(mainFuse);
  const {children, id: mainFuseId} = data;

  const columns =  Object.fromEntries(
    children.map(column => [column.id, column])
  )


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
      <StyledDepotItem>{mainFuse.name}</StyledDepotItem>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          Object.values(children).map( ({id}, index) => {
            const column = columns[id];

            const subColumns = children.filter(subColumn => column.id === subColumn.parent ? columns[subColumn.id] : null);

            return column.parent === mainFuseId ? <Column key={column.id} column={column} subColumns={children} index={index}/> : null;
          })
        }
      </DragDropContext>
    </StyledDepotSetup>
  );
};

export default DepotSetup;
