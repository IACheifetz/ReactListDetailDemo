import { client } from './client';

export async function getStarWarsChars() {
    const response = await client
        .from('StarWarsChars')
        .select('*');

    return response.body;
}

export async function getStarWarsCharById(id) {
    const response = await client
        .from('StarWarsChars')
        .select('*')
        .match({ id })
        .single();

    return response.body;
}