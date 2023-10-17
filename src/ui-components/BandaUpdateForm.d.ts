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
export declare type BandaUpdateFormInputValues = {
    name?: string;
    integrantes?: any[];
    Eventos?: any[];
};
export declare type BandaUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    integrantes?: ValidationFunction<any>;
    Eventos?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BandaUpdateFormOverridesProps = {
    BandaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    integrantes?: PrimitiveOverrideProps<AutocompleteProps>;
    Eventos?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BandaUpdateFormProps = React.PropsWithChildren<{
    overrides?: BandaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    banda?: any;
    onSubmit?: (fields: BandaUpdateFormInputValues) => BandaUpdateFormInputValues;
    onSuccess?: (fields: BandaUpdateFormInputValues) => void;
    onError?: (fields: BandaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BandaUpdateFormInputValues) => BandaUpdateFormInputValues;
    onValidate?: BandaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BandaUpdateForm(props: BandaUpdateFormProps): React.ReactElement;
