/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { listEventos } from "../graphql/queries";
import { createBanda, updateEvento } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BandaCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    integrantes: [],
    Eventos: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [integrantes, setIntegrantes] = React.useState(
    initialValues.integrantes
  );
  const [integrantesLoading, setIntegrantesLoading] = React.useState(false);
  const [integrantesRecords, setIntegrantesRecords] = React.useState([]);
  const [Eventos, setEventos] = React.useState(initialValues.Eventos);
  const [EventosLoading, setEventosLoading] = React.useState(false);
  const [EventosRecords, setEventosRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setIntegrantes(initialValues.integrantes);
    setCurrentIntegrantesValue(undefined);
    setCurrentIntegrantesDisplayValue("");
    setEventos(initialValues.Eventos);
    setCurrentEventosValue(undefined);
    setCurrentEventosDisplayValue("");
    setErrors({});
  };
  const [currentIntegrantesDisplayValue, setCurrentIntegrantesDisplayValue] =
    React.useState("");
  const [currentIntegrantesValue, setCurrentIntegrantesValue] =
    React.useState(undefined);
  const integrantesRef = React.createRef();
  const [currentEventosDisplayValue, setCurrentEventosDisplayValue] =
    React.useState("");
  const [currentEventosValue, setCurrentEventosValue] =
    React.useState(undefined);
  const EventosRef = React.createRef();
  const getIDValue = {
    integrantes: (r) => JSON.stringify({ id: r?.id }),
    Eventos: (r) => JSON.stringify({ id: r?.id }),
  };
  const integrantesIdSet = new Set(
    Array.isArray(integrantes)
      ? integrantes.map((r) => getIDValue.integrantes?.(r))
      : getIDValue.integrantes?.(integrantes)
  );
  const EventosIdSet = new Set(
    Array.isArray(Eventos)
      ? Eventos.map((r) => getIDValue.Eventos?.(r))
      : getIDValue.Eventos?.(Eventos)
  );
  const getDisplayValue = {
    integrantes: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Eventos: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    integrantes: [],
    Eventos: [],
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
  const fetchIntegrantesRecords = async (value) => {
    setIntegrantesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listEventos.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listEventos?.items;
      var loaded = result.filter(
        (item) => !integrantesIdSet.has(getIDValue.integrantes?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setIntegrantesRecords(newOptions.slice(0, autocompleteLength));
    setIntegrantesLoading(false);
  };
  const fetchEventosRecords = async (value) => {
    setEventosLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listEventos.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listEventos?.items;
      var loaded = result.filter(
        (item) => !EventosIdSet.has(getIDValue.Eventos?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEventosRecords(newOptions.slice(0, autocompleteLength));
    setEventosLoading(false);
  };
  React.useEffect(() => {
    fetchIntegrantesRecords("");
    fetchEventosRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          integrantes,
          Eventos,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            name: modelFields.name,
          };
          const banda = (
            await API.graphql({
              query: createBanda.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createBanda;
          const promises = [];
          promises.push(
            ...integrantes.reduce((promises, original) => {
              promises.push(
                API.graphql({
                  query: updateEvento.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Eventos.reduce((promises, original) => {
              promises.push(
                API.graphql({
                  query: updateEvento.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BandaCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              integrantes,
              Eventos,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              integrantes: values,
              Eventos,
            };
            const result = onChange(modelFields);
            values = result?.integrantes ?? values;
          }
          setIntegrantes(values);
          setCurrentIntegrantesValue(undefined);
          setCurrentIntegrantesDisplayValue("");
        }}
        currentFieldValue={currentIntegrantesValue}
        label={"Integrantes"}
        items={integrantes}
        hasError={errors?.integrantes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("integrantes", currentIntegrantesValue)
        }
        errorMessage={errors?.integrantes?.errorMessage}
        getBadgeText={getDisplayValue.integrantes}
        setFieldValue={(model) => {
          setCurrentIntegrantesDisplayValue(
            model ? getDisplayValue.integrantes(model) : ""
          );
          setCurrentIntegrantesValue(model);
        }}
        inputFieldRef={integrantesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Integrantes"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Evento"
          value={currentIntegrantesDisplayValue}
          options={integrantesRecords.map((r) => ({
            id: getIDValue.integrantes?.(r),
            label: getDisplayValue.integrantes?.(r),
          }))}
          isLoading={integrantesLoading}
          onSelect={({ id, label }) => {
            setCurrentIntegrantesValue(
              integrantesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentIntegrantesDisplayValue(label);
            runValidationTasks("integrantes", label);
          }}
          onClear={() => {
            setCurrentIntegrantesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchIntegrantesRecords(value);
            if (errors.integrantes?.hasError) {
              runValidationTasks("integrantes", value);
            }
            setCurrentIntegrantesDisplayValue(value);
            setCurrentIntegrantesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("integrantes", currentIntegrantesDisplayValue)
          }
          errorMessage={errors.integrantes?.errorMessage}
          hasError={errors.integrantes?.hasError}
          ref={integrantesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "integrantes")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              integrantes,
              Eventos: values,
            };
            const result = onChange(modelFields);
            values = result?.Eventos ?? values;
          }
          setEventos(values);
          setCurrentEventosValue(undefined);
          setCurrentEventosDisplayValue("");
        }}
        currentFieldValue={currentEventosValue}
        label={"Eventos"}
        items={Eventos}
        hasError={errors?.Eventos?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Eventos", currentEventosValue)
        }
        errorMessage={errors?.Eventos?.errorMessage}
        getBadgeText={getDisplayValue.Eventos}
        setFieldValue={(model) => {
          setCurrentEventosDisplayValue(
            model ? getDisplayValue.Eventos(model) : ""
          );
          setCurrentEventosValue(model);
        }}
        inputFieldRef={EventosRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Eventos"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Evento"
          value={currentEventosDisplayValue}
          options={EventosRecords.map((r) => ({
            id: getIDValue.Eventos?.(r),
            label: getDisplayValue.Eventos?.(r),
          }))}
          isLoading={EventosLoading}
          onSelect={({ id, label }) => {
            setCurrentEventosValue(
              EventosRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEventosDisplayValue(label);
            runValidationTasks("Eventos", label);
          }}
          onClear={() => {
            setCurrentEventosDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEventosRecords(value);
            if (errors.Eventos?.hasError) {
              runValidationTasks("Eventos", value);
            }
            setCurrentEventosDisplayValue(value);
            setCurrentEventosValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Eventos", currentEventosDisplayValue)
          }
          errorMessage={errors.Eventos?.errorMessage}
          hasError={errors.Eventos?.hasError}
          ref={EventosRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Eventos")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
