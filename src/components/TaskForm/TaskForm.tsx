import React, { useContext } from 'react';
import { Box, Container, Input, Select } from '@chakra-ui/react';
import styles from './TaskForm.module.css';
import MyButton from '../../components/MyButton/MyButton';
import { FormContext } from '../../contexts/FormContext';
import { assigners } from '../../consts';

interface Props {
  isViewMode?: boolean;
}


const TaskForm: React.FC<Props> = (props) => {
  const { register, watch, onClickStepButton, errors } = useContext(FormContext);
  const { isViewMode = false } = props;

  const { currentStep } = watch();

  const nextButtonColor = currentStep ? "#475467" : "#fff";
  const nextButtonBG = currentStep ? "#DFE3EB" : "#0F52BA";

  const nextButtonTXT = currentStep ? "Back" : "Next";

  const submitButtonColor = currentStep ? "#fff" : "#475467";
  const submitButtonBG = currentStep ? "#0F52BA" : "#DFE3EB";

  return (
    <Box bg="#F7F9FC" className={styles.mainBox}>
      <Input
        type="text"
        placeholder="Title"
        {...register('title')}
        disabled={isViewMode}
      />
      {errors?.title && <span>{errors.title.message}</span>}
      <Select
        disabled={isViewMode}
        placeholder="Select assignee"
        {...register('assigneeName')}
      >
        {assigners.map(assignee => <option 
        key={assignee} 
        value={assignee}>{assignee}</option>)}
      </Select>
      {errors?.assigneeName && <span>{errors.assigneeName.message}</span>}

      <Box>
        {!isViewMode && <Container className={styles.buttonContainer}>
          <MyButton
            text={nextButtonTXT}
            type="button"
            isDisabled={false}
            onClick={onClickStepButton}
            backgroundColor={nextButtonBG}
            color={nextButtonColor}
          />
          <MyButton text="Finish"
            type="submit"
            isDisabled={false}
            backgroundColor={submitButtonBG}
            color={submitButtonColor}
          />

        </Container>}
      </Box>
    </Box >
  );
};

export default TaskForm;
