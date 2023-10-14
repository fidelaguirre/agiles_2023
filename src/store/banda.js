
import { API, graphqlOperation } from 'aws-amplify';

import { createBanda } from '../graphql/mutations';
import { listBandas } from '@/graphql/queries';

export async function createNewBanda(banda) {
    return API.graphql(graphqlOperation(createBanda, { input: banda }))
}

export async function getAllBandas() {
    const response = await API.graphql(graphqlOperation(listBandas))
    return response;
}