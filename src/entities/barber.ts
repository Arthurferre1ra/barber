interface BarberProps {
    name: string
    startedAt: Date
}

export class barber {
    private props: BarberProps;

    get name() {
        return this.props.name
    }

    get startedAt() {
        return this.props.startedAt;
    }

    constructor (props: BarberProps) {
        this.props = props;
    }
}