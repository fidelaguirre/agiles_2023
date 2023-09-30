/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventoCreateFormInputValues = {
    name?: string;
    date?: string;
    location?: string;
    description?: string;
    Banda?: any;
};
export declare type EventoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    Banda?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventoCreateFormOverridesProps = {
    EventoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    Banda?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EventoCreateFormProps = React.PropsWithChildren<{
    overrides?: EventoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventoCreateFormInputValues) => EventoCreateFormInputValues;
    onSuccess?: (fields: EventoCreateFormInputValues) => void;
    onError?: (fields: EventoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventoCreateFormInputValues) => EventoCreateFormInputValues;
    onValidate?: EventoCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventoCreateForm(props: EventoCreateFormProps): React.ReactElement;
