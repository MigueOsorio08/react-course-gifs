import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';


describe('Pruebas sobre el <GifGridItem/>', () => {

    const title = "one punch";
    const url = "https://localhost/algo.jpg";

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el URL y el alt indicado', () => {
        const { getByAltText } = render(<GifGridItem title={title} url={url} />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe mostrar el titulo en el componente', () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});