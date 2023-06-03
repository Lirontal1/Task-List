import { createContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    Control,
    FieldErrors,
    SubmitHandler,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormSetValue,
    UseFormWatch,
    useForm
} from "react-hook-form";
import Task from "../types/task";
import { assigners } from "../consts";

export type FormValues = {
    //step1
    title: string;
    assigneeName: string;
    //step2
    status: string;
    description: string;
    relatedTasks: number[];
    //step3
    //extras
    currentStep: number;
};

interface FormContextProps {
    watch: UseFormWatch<FormValues>;
    register: UseFormRegister<FormValues>;
    control: Control<FormValues, any>;
    setValue: UseFormSetValue<FormValues>;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    onClickStepButton: () => void;
    onSubmit: SubmitHandler<FormValues>;
    errors: FieldErrors<FormValues>
}

export const FormContext = createContext({} as FormContextProps);

interface FormContextProviderProps {
    defaultTask?: Task;
    children: React.ReactNode;
}

export default function FormContextProvider({ defaultTask, children }: FormContextProviderProps) {

    const formSchema = yup.object().shape({
        title: yup
            .string()
            .required("Required field")
            .min(3, "Minimal length of 3"),
        assigneeName: yup
            .string()
            .oneOf(assigners, "Invalid assignee"),
    });

    const {
        register,
        handleSubmit,
        formState,
        setValue,
        watch,
        control,
        trigger
    } = useForm<FormValues>({
        resolver: yupResolver(formSchema),
        defaultValues: defaultTask ? {
            currentStep: 0,
            ...defaultTask
        } : { currentStep: 0 },
    });

    const onClickStepButton = async () => {
        const isFormValid = await trigger(); // Trigger validation for all fields

        if (isFormValid) {
            const newStep = watch("currentStep") === 0 ? 1 : 0;
            setValue("currentStep", newStep);
        }
    };

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    const value = {
        setValue,
        register,
        watch,
        control,
        handleSubmit,
        onClickStepButton,
        onSubmit,
        errors: formState.errors
    };

    return (
        <FormContext.Provider value={value}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormContext.Provider>
    );
}