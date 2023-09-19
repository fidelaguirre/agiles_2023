
import { API, graphqlOperation } from 'aws-amplify';

import { createBanda } from '../graphql/mutations';

export default function createNewBanda(banda) {
    return API.graphql(graphqlOperation(createBanda, { input: banda }))
}