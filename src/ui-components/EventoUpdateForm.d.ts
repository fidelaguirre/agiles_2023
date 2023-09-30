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
export declare type EventoUpdateFormInputValues = {
    name?: string;
    date?: string;
    location?: string;
    description?: string;
    Banda?: any;
};
export declare type EventoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    Banda?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventoUpdateFormOverridesProps = {
    EventoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    Banda?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EventoUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    evento?: any;
    onSubmit?: (fields: EventoUpdateFormInputValues) => EventoUpdateFormInputValues;
    onSuccess?: (fields: EventoUpdateFormInputValues) => void;
    onError?: (fields: EventoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventoUpdateFormInputValues) => EventoUpdateFormInputValues;
    onValidate?: EventoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventoUpdateForm(props: EventoUpdateFormProps): React.ReactElement;
