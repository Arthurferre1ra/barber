import { Appointment } from "../entities/appointment";

interface CreateAppointmentRequest {
    costumer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
    async execute ({ 
        costumer,
        startsAt,
        endsAt
     }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const appointment = new Appointment({
            costumer,
            startsAt,
            endsAt
        })

        return appointment
    }
}