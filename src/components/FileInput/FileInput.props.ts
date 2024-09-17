import { ChangeEvent, HTMLAttributes } from 'react';

export interface FileInputProps extends HTMLAttributes<HTMLLabelElement> {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>
}