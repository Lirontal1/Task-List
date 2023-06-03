import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import {
  Switch,
  Route,
} from "react-router-dom";
import TaskPage from './pages/TaskPage';
import AddTaskPage from './pages/AddTaskPage';
import TasksListPage from './pages/TasksListPage';

const App: React.FC = () => {

  return (
    <ChakraProvider>
      <Container maxW="xl" mt={8}>
        <Switch>
          <Route path="/task/:id" >
            <TaskPage />
          </Route>
          <Route path="/addTask">
            <AddTaskPage />
          </Route>
          <Route path="/">
            <TasksListPage/>
          </Route>
        </Switch>
      </Container>
    </ChakraProvider>
  );
};

export default App;
