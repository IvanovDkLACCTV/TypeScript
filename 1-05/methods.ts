// @ts-ignore
var log = console.log

enum PaymentStatus {
    Holt,
    Processed,
    Reversed
}

class Payment {
    id: number
    status: PaymentStatus
    createdAt: Date = new Date()
    updatedAt: Date


    constructor(id: number) {
        this.id = id
        // this.createdAt = new Date()
        // this.status = PaymentStatus.Holt
    }

    getPaymentLifeTime(): number{
        return new Date().getTime() - this.updatedAt.getTime()
    }

    unholdPayment(): void{
        if (this.status === PaymentStatus.Processed){
            throw new Error('Payment cannot be canceled')
        }
        this.status = PaymentStatus.Reversed
        this.updatedAt = new Date()
    }
}

const payment = new Payment(1)
payment.unholdPayment()
log(payment)
const time = payment.getPaymentLifeTime()
log(time)