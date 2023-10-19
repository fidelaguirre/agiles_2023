/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getIntegrante } from "../graphql/queries";
import { updateIntegrante } from "../graphql/mutations";
export default function IntegranteUpdateForm(props) {
  const {
    id: idProp,
    integrante: integranteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    id_perfil: "",
    id_banda: "",
  };
  const [id_perfil, setId_perfil] = React.useState(initialValues.id_perfil);
  const [id_banda, setId_banda] = React.useState(initialValues.id_banda);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = integranteRecord
      ? { ...initialValues, ...integranteRecord }
      : initialValues;
    setId_perfil(cleanValues.id_perfil);
    setId_banda(cleanValues.id_banda);
    setErrors({});
  };
  const [integranteRecord, setIntegranteRecord] =
    React.useState(integranteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getIntegrante.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getIntegrante
        : integranteModelProp;
      setIntegranteRecord(record);
    };
    queryData();
  }, [idProp, integranteModelProp]);
  React.useEffect(resetStateValues, [integranteRecord]);
  const validations = {
    id_perfil: [{ type: "Required" }],
    id_banda: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          id_perfil,
          id_banda,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateIntegrante.replaceAll("__typename", ""),
            variables: {
              input: {
                id: integranteRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "IntegranteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Id perfil"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={id_perfil}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              id_perfil: value,
              id_banda,
            };
            const result = onChange(modelFields);
            value = result?.id_perfil ?? value;
          }
          if (errors.id_perfil?.hasError) {
            runValidationTasks("id_perfil", value);
          }
          setId_perfil(value);
        }}
        onBlur={() => runValidationTasks("id_perfil", id_perfil)}
        errorMessage={errors.id_perfil?.errorMessage}
        hasError={errors.id_perfil?.hasError}
        {...getOverrideProps(overrides, "id_perfil")}
      ></TextField>
      <TextField
        label="Id banda"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={id_banda}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              id_perfil,
              id_banda: value,
            };
            const result = onChange(modelFields);
            value = result?.id_banda ?? value;
          }
          if (errors.id_banda?.hasError) {
            runValidationTasks("id_banda", value);
          }
          setId_banda(value);
        }}
        onBlur={() => runValidationTasks("id_banda", id_banda)}
        errorMessage={errors.id_banda?.errorMessage}
        hasError={errors.id_banda?.hasError}
        {...getOverrideProps(overrides, "id_banda")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || integranteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || integranteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
