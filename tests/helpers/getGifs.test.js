import { getGifs } from '../../src/helpers/getGifs';

describe('pruebas en getGifs', () => {
    test('Debe retornar un arreglo de gifs', async () => {
        const getgifs = await getGifs('One Punch');
        expect(getgifs.length).toBeGreaterThan(0);
        expect(getgifs[0]).toEqual({
            id : expect.any(String),
            title : expect.any(String),
            url : expect.any(String)
        })
    })
})