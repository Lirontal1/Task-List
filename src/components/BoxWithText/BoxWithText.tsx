import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from './BoxWithText.module.css';

interface BoxWithTextProps {
    text: string;
    onClick?: () => void;
    color?: string;
}

const BoxWithText: React.FC<BoxWithTextProps> = ({ text, onClick = () => { }, color = "black" }) => {
    return (
        <Box
            className={styles.textContainer}
            padding={"0.25rem"}
            {...{ onClick, color }}
        >
            {text}
        </Box >
    );
};

export default BoxWithText;
