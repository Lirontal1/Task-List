import React from 'react';
import { Box } from '@chakra-ui/react';
import TaskForm from '../components/TaskForm/TaskForm';
import FormContextProvider from '../contexts/FormContext';

const AddTaskPage: React.FC = () => {

  return (
    <Box>
      <FormContextProvider>
        <TaskForm />
      </FormContextProvider>
    </Box>
  );
};

export default AddTaskPage;
