import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../tests/utils/get-future-date'

test('create an appointment', () => {
    const startsAt = getFutureDate('2025-07-17')
    const endsAt = getFutureDate('2025-07-18')

    const appointment = new Appointment({
        costumer: 'Jhon Doe',
        startsAt,
        endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.costumer).toEqual('Jhon Doe')
})

test('cannot create an appointment with end date before start date', () => {
    const startsAt = getFutureDate('2025-07-17')
    const endsAt = getFutureDate('2025-07-16')

    startsAt.setDate(startsAt.getDate() + 2)
    endsAt.setDate(endsAt.getDate() + 1)

    expect(() => {
            const appointment = new Appointment({
            costumer: 'Jhon Doe',
            startsAt,
            endsAt
        })
    }).toThrow()
})