import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { RootState } from '../store/index';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import TextComponent from '../components/Text/Text';
import BoxWithText from '../components/BoxWithText/BoxWithText';
import { useHistory } from 'react-router-dom';

const TasksListPage: React.FC = () => {
    const history = useHistory();

    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const onClickAddNewTask = () => {
        history.push("/addTask");
    }

    return (
        <Box>
            <Container display="flex" alignItems="center" margin={0} padding={0}>
                <TextComponent fontSize="2xl" color="#475467" fontWeight={600}>
                    Tasks List
                </TextComponent>
                <Box style={{ paddingLeft: "10px" }} >
                    <BoxWithText text="New Task" onClick={onClickAddNewTask} color="#E3E7ED" />
                </Box >
            </Container>
            <Container margin={0} padding={0} marginTop={"1rem"} >
                <TaskList {...{ tasks }} />
            </Container>
        </Box>
    );
};

export default TasksListPage;
