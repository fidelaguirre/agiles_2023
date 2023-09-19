/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BandaCreateFormInputValues = {
    name?: string;
};
export declare type BandaCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BandaCreateFormOverridesProps = {
    BandaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BandaCreateFormProps = React.PropsWithChildren<{
    overrides?: BandaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BandaCreateFormInputValues) => BandaCreateFormInputValues;
    onSuccess?: (fields: BandaCreateFormInputValues) => void;
    onError?: (fields: BandaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BandaCreateFormInputValues) => BandaCreateFormInputValues;
    onValidate?: BandaCreateFormValidationValues;
} & React.CSSProperties>;
export default function BandaCreateForm(props: BandaCreateFormProps): React.ReactElement;
