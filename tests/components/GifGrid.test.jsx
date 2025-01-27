import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { use } from "react";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {
    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })
    
    test('Debe mostrar los items cuando se cargan las imagens de useFetchGifs', () => { 
        
        const gifs = [{
            id : 'ABC',
            title: 'Cualquier cosa',
            url : 'https://localhost/cualquier.jpg'
        },{
            id : '123',
            title: 'Cualquier cosa',
            url : 'https://localhost/cualquier.jpg'
        }]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(gifs.length);
     })



})