const data = {
  tasks: {
    "task-1": {
      id: "task-1",
      name: 'name 1'
    },
    "task-2": {
      id: "task-2",
      name: 'name 2'
    },
    "task-3": {
      id: "task-3",
      name: 'name 3'
    },
    "task-4": {
      id: "task-4",
      name: 'name 4'
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Column 1',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      taskIds: ['task-3', 'task-4'],
      title: 'Column 2',
    }
  },
  columnOrder: ['column-1', 'column-2']
}

export default data;
