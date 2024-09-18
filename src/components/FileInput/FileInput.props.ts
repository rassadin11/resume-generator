import { ChangeEvent, HTMLAttributes } from 'react';

export interface FileInputProps extends HTMLAttributes<HTMLLabelElement> {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    file: string | ArrayBuffer | null;
    setFile: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>
}