import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas con el compoente <AddCategory/>', () => {
    test('should change the text in the box', () => {
        render(<AddCategory onNewCategory={() => { }} />)

        const inputElem = screen.getByPlaceholderText('Buscar gifs');

        fireEvent.input(inputElem, { target: { value: 'Hola Mundo' } })

        expect(inputElem.value).toBe('Hola Mundo')
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "cosa";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const inputElem = screen.getByPlaceholderText('Buscar gifs');
        const formElem = screen.getByRole('form');

        fireEvent.input(inputElem, { target: { value: inputValue } });
        fireEvent.submit(formElem);

        expect(inputElem.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })

    test("no debe de llar el OnNewCategory si el input esta vacio", () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)
        const formElem = screen.getByRole('form');
        fireEvent.submit(formElem);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
})