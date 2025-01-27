import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe("Pruebas sovre el componente GiftExpertApp", () => {

    test('Debe realizar algunas tareas', () => { 
        render(<GiftExpertApp />)

        screen.debug()
     })

});