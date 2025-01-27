import { waitFor, renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el custonHook', () => {
    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images).toEqual([]);
        expect(isLoading).toBe(true);
    })

    test('Debe regresar un arreglo de imágenes y el loading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(() => {
            expect(result.current.images.length).toBeGreaterThan(0);
        });

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    })
}) 