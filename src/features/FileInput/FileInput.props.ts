import { ChangeEvent, HTMLAttributes } from 'react';

export interface FileInputProps extends HTMLAttributes<HTMLLabelElement> {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    file: string | ArrayBuffer | null;
    setFile: (image: string | ArrayBuffer | null) => void
}