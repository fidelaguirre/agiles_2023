import { API, graphqlOperation } from "aws-amplify";

import { listEventos } from "@/graphql/queries";
import { createEvento } from '../graphql/mutations';

export default function createNewEvento(evento) {
  const resp = API.graphql(graphqlOperation(listEventos))
  console.log(resp)
    return resp
}

