// @ts-ignore
var log = console.log;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holt"] = 0] = "Holt";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.createdAt = new Date();
        this.id = id;
        // this.createdAt = new Date()
        // this.status = PaymentStatus.Holt
    }
    Payment.prototype.getPaymentLifeTime = function () {
        return new Date().getTime() - this.updatedAt.getTime();
    };
    Payment.prototype.unholdPayment = function () {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Payment cannot be canceled');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    };
    return Payment;
}());
var payment = new Payment(1);
payment.unholdPayment();
log(payment);
var time = payment.getPaymentLifeTime();
log(time);
