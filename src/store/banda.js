
import { API, graphqlOperation } from 'aws-amplify';

import { createBanda, deleteBanda } from '../graphql/mutations';
import { listBandas, getBandaByName } from '@/graphql/queries';

export async function createNewBanda(banda) {
    await getBandaByName(banda.name)
    .then(response => {
        if(response.length > 0){
            return {error: "Ya existe una banda registrada con ese nombre"}
        }
    })
    return API.graphql(graphqlOperation(createBanda, { input: banda }))
}

export async function eliminarBanda(id_banda){
    return API.graphql(graphqlOperation(deleteBanda, {input: {id: id_banda}}))
}

export async function updateBanda(){
    //
}

export async function getAllBandas() {
    const response = await API.graphql(graphqlOperation(listBandas))
    .then(resp => {return resp.data.listBandas.items});

    return response;
}

export async function getBandaById() {
    //
}

export async function getBandaPorNombre(nombre_banda){

    const response = await API.graphql(graphqlOperation(listBandas, {filter: {name: {eq: nombre_banda}}}))
    .then(resp => {
        return resp.data.listBandas.items
    })
    
    return response;
}