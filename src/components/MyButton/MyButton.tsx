import React from 'react';
import { Button } from '@chakra-ui/react';

interface MyButtonProps {
    text: string;
    backgroundColor?: string;
    onClick?: () => void;
    isDisabled?: boolean;
    type?: "submit" | "reset" | "button";
    color?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ text,
    backgroundColor, color = "#fff", onClick = () => { }, isDisabled = false,
    type = 'button' }) => {

    return (
        <Button {...{
            backgroundColor,
            onClick, isDisabled,
            type, color
        }}
        >
            {text}
        </Button>

    );
};

export default MyButton;
