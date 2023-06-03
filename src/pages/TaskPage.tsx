import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import TaskForm from '../components/TaskForm/TaskForm';
import TasksContextProvider from '../contexts/FormContext';
interface RouteParams {
  id: string;
}

const TaskPage: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const task = useMemo(() => {
    return tasks.find((task) => task.id === Number(id));
  }, [id, tasks])

  if (!task) {
    <Box>No matching task Has been found</Box>
  }
  return (
    <TasksContextProvider defaultTask={task}>
    <TaskForm isViewMode />
    </TasksContextProvider>
  );
};

export default TaskPage;
