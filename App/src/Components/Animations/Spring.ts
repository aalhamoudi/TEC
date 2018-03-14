

export default class Spring {
    currentX: number;
    finalX: number;
    currentV: number = 0;
    values: number[] = new Array<number>();

    constructor(private initialValue: number, private finalValue: number, private stiffness: number, private damping: number, private range: number) {
        this.currentX = initialValue;
        this.finalX = finalValue;
        for (var i = 0; i <= range; i++) {
            this.step(this.currentX, this.finalX, this.currentV, i);
            this.values[i] = this.lerp(initialValue, finalValue, this.currentV);
        }
        console.log(this.displacements)

    }

    displacement(iPosition: number, fPosition: number): number { return fPosition - iPosition; }
    FSpring(displacement: number): number { return -(this.stiffness) * displacement; }
    FDamping(velocity: number): number { return -(this.damping) * velocity; }

    displacements = new Array<number>();
    step(currentX: number, finalX: number, v: number, t: number) {
        let displacement = this.displacement(currentX, finalX);
        this.displacements.push(displacement);
        let acceleration = this.FSpring(displacement) + this.FDamping(v);

        console.log(this.FSpring(displacement));

        this.currentV = v + acceleration;
        this.currentX = currentX + this.currentV;
    }

    lerp(a, b, p) {
        return a + p * (b - a);
    }
}
