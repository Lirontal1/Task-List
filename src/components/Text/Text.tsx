import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends TextProps {
}

const TextComponent: React.FC<Props> = ({ children, fontFamily = 'Inter', ...rest }) => {
    return <Text
        {...rest}
        {...{ fontFamily }}
    >
        {children}
    </Text>;
};

export default TextComponent;
