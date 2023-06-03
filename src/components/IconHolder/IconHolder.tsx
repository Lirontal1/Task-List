import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from './IconHolder.module.css';

interface TaskCardProps {
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    bgColor?: string;
    h?:string;
}

const TaskCard: React.FC<TaskCardProps> = ({ svg: SvgComponent, bgColor = "#0F52BA",h='auto' }) => {
    return (
        <Box bg={bgColor} p={5} color='white' w={20} h={h} className={styles.IconHolder}>
            <SvgComponent />
        </Box>
        
    );
};

export default TaskCard;
