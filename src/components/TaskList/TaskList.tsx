import React, { Fragment } from 'react';
import TaskCard from '../TaskCard/TaskCard';
import Task from '../../types/task';
import styles from './TaskList.module.css';
import { Box } from '@chakra-ui/react';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {

  return (
    <Box className={styles.listContainer}>
      {tasks.map((task: Task) => (
        <Fragment key={task.id}>
          <TaskCard
            {...{ task }}
          />
        </Fragment>
      ))}
    </Box>
  );
};

export default TaskList;