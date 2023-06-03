import React from 'react';
import Task from '../../types/task';
import { ReactComponent as TaskIcon } from '../../assets/icons/Task.svg';
import IconHolder from '../IconHolder/IconHolder';
import styles from './TaskCard.module.css';
import { Box } from '@chakra-ui/react';
import TextComponent from '../Text/Text';
import BoxWithText from '../BoxWithText/BoxWithText';
import { useHistory } from 'react-router-dom';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const history = useHistory();

  const handleClickCard = () => {
    history.push("/task/" + task.id)
  }
  
  return (
    <Box className={styles.Card} onClick={handleClickCard}>
      <Box className={styles.ContextBox}>
        <Box className={styles.iconHolder}>
          <IconHolder svg={TaskIcon} />
        </Box>
        <Box className={styles.textsBox}>
          <TextComponent fontSize="sm" color="#101828" fontWeight={600}>
            {task.title}
          </TextComponent>
          <Box className={styles.textsRowBox}>
            <TextComponent fontSize="xs" color="#98A2B3" fontWeight={600}>
              {task.assigneeName}
            </TextComponent>
            ·
            <Box display="flex">
              <TextComponent fontSize="xs" color="#98A2B3" fontWeight={500}>
                Creation Date:
              </TextComponent>
              <TextComponent fontSize="xs" color="#98A2B3" fontWeight={400}>
                {task.creationDate}
              </TextComponent>
            </Box>
          </Box>
        </Box>


        <Box className={styles.BoxesRightSide}>
          <BoxWithText text={task.status} />
        </Box>
      </Box>
    </Box>
  );
};

export default TaskCard;
