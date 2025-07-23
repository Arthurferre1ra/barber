import { test, expect } from "vitest";
import { barber } from "./barber";

//Para criar um teste, é necessário criar uma nova "Classe" para colher as informações que irão conter no teste.
test('create barber', () => {
    const startedAt = new Date()

    const barbers = new barber({
        name: 'Jhon Doe',
        startedAt
    })

    expect(barbers).toBeInstanceOf(barber)
    expect(barbers.name).equals('Jhon Doe')
})