import { StyledDepotItem } from "./depot-item.styled";
import { Draggable } from "react-beautiful-dnd";

const DepotItem = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index} >
        {(provided) => (
          <StyledDepotItem
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {data.name}
          </StyledDepotItem>
        )}
    </Draggable>
  )
}

export default DepotItem;
