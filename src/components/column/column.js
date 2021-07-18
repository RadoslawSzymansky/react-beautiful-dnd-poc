import { Droppable } from 'react-beautiful-dnd';
import { DepotItem } from '../../components';
import { StyledColumn } from './column.styled';

const recursive = (column, columns, index) => {

    console.log('rekurencja:', column.id, columns)

    const subColumns = columns.filter(subColumn => column.id === subColumn.parent);


    return (
            <Droppable droppableId={column.id} key={column.id}>
              {
                (provided) => (
                  <StyledColumn style={{ border: '1px solid #aaa', padding: 10 }}  {...provided.droppableProps} ref={provided.innerRef}>
                    <DepotItem key={column.id} data={column} index={index}  />
                    {
                      subColumns.length ? subColumns.map( (col, index) => recursive(col, columns, index)) : null
                    }
                  </StyledColumn>
                )
              }
            </Droppable>

   )
};

const Column = ({ column, subColumns, index }) => {

  // this element should be draable!

  return (
    <>
      {
        subColumns.length ?
        recursive(
          column,
          subColumns,
          index
        ) :
        <Droppable droppableId={column.id}>
            {
              (provided) => (
                <StyledColumn style={{ border: '1px solid #aaa', padding: 10 }}  {...provided.droppableProps} ref={provided.innerRef}>
                  <DepotItem key={column.id} data={column} index={index}  />
                </StyledColumn>
              )
            }
        </Droppable>
      }
    </>
  )
};

export default Column;


