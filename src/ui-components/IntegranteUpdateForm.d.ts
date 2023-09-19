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
export declare type IntegranteUpdateFormInputValues = {
    id_perfil?: number;
    id_banda?: number;
};
export declare type IntegranteUpdateFormValidationValues = {
    id_perfil?: ValidationFunction<number>;
    id_banda?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IntegranteUpdateFormOverridesProps = {
    IntegranteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id_perfil?: PrimitiveOverrideProps<TextFieldProps>;
    id_banda?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IntegranteUpdateFormProps = React.PropsWithChildren<{
    overrides?: IntegranteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    integrante?: any;
    onSubmit?: (fields: IntegranteUpdateFormInputValues) => IntegranteUpdateFormInputValues;
    onSuccess?: (fields: IntegranteUpdateFormInputValues) => void;
    onError?: (fields: IntegranteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IntegranteUpdateFormInputValues) => IntegranteUpdateFormInputValues;
    onValidate?: IntegranteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IntegranteUpdateForm(props: IntegranteUpdateFormProps): React.ReactElement;
