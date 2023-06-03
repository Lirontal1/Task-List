import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Task from '../types/task';

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [  {
        id: 1,
        title: 'Task 1',
        assigneeName: 'Liron',
        assigneeAvatar: 'avatar1.jpg',
        creationDate: '2023-05-01',
        status: 'In Progress',
        description: 'This is task 1 description',
        relatedTasks: [2, 3],
      },
      {
        id: 2,
        title: 'Task 2',
        assigneeName: 'Adam',
        assigneeAvatar: 'avatar2.jpg',
        creationDate: '2023-05-02',
        status: 'Pending',
        description: 'This is task 2 description',
        relatedTasks: [1],
      },
      {
        id: 3,
        title: 'Task 3',
        assigneeName: 'Adam',
        assigneeAvatar: 'avatar3.jpg',
        creationDate: '2023-05-03',
        status: 'Completed',
        description: 'This is task 3 description',
        relatedTasks: [1, 2],
      },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        updateConnectedTasks: (state, action: PayloadAction<{ taskId: number; connectedTasks: number[] }>) => {
            const { taskId, connectedTasks } = action.payload;
            const taskToUpdate = state.tasks.find((task) => task.id === taskId);
            if (taskToUpdate) {
                taskToUpdate.relatedTasks = connectedTasks;
            }
        },
    },
});

export const { addTask, updateConnectedTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
