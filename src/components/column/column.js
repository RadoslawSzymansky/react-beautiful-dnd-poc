import { Droppable } from 'react-beautiful-dnd';
import { DepotItem } from '../../components';
import { StyledColumn } from './column.styled';

const Column = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {
        (provided) => (
          <StyledColumn style={{ border: '1px solid #aaa', padding: 10 }}  {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map( (task, index) => <DepotItem key={task.id} data={task} index={index}  />)}
            {provided.placeholder}
          </StyledColumn>
        )
      }
    </Droppable>
  )
};

export default Column;
