import { API, graphqlOperation } from "aws-amplify";

import { createEvento } from '../graphql/mutations';

export default function createNewEvento(evento) {
    return API.graphql(graphqlOperation(createEvento, {input: evento}))
}