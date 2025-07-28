enum PaymentStatus {
    Holt,
    Processed,
    Reversed
}

class Payment {
    id: number
    status: PaymentStatus
    createdAt: Date
    updatedAt: Date


    constructor(id: number) {
        this.id = id
        this.createdAt = new Date()
        this.status = PaymentStatus.Holt
    }

    getPaymentLifeTime(): number{
        return new Date().getTime() - this.updatedAt.getTime()
    }
}

const payment = new Payment(1)