import { describe, expect, it } from 'vitest'
import { CreateAppointment } from './create-appointment'
import { Appointment } from '../entities/appointment';
import { getFutureDate } from '../tests/utils/get-future-date';

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const sut = new CreateAppointment();

        const startsAt = getFutureDate('2025-07-17')
        const endsAt = getFutureDate('2025-07-18')

        startsAt.setDate(startsAt.getDate() + 1)
        endsAt.setDate(endsAt.getDate() + 2)
        expect(sut.execute({
            costumer: 'Jhon Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})