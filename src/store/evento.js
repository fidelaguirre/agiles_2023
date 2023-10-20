import { API, graphqlOperation } from "aws-amplify";

import { createEvento } from '../graphql/mutations';
import { listEventos } from "@/graphql/queries";

export default function createNewEvento(evento) {
    return API.graphql(graphqlOperation(createEvento, {input: evento}))
}

export async function getAllEventos() {
  const response = await API.graphql(graphqlOperation(listEventos))
  return response;
}