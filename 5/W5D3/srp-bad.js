/* OOP representation of an Invoice. */

/* - This implementation is "bad" because it doesn't do just "one" thing. */
/* - We have one Invoice class that handles an EXPENSE and a FEE things. */
/* - These things should be THEIR OWN data types according 
     to the Single Responsibility Principle (SRP). 
*/



/* ==== BAD: one class handles INVOICES, FEEs, and EXPENSES ======== */
class Invoice {
    constructor(invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        this.lineItems = [];
    }

    addExpense(text, units, rate) {
        this.lineItems.push({
            text: text,
            units: units,
            rate,
        });
    }

    addFee(text, amount) {
        this.lineItems.push({
            text,
            amount,
        });
    }

    getTotal() {
        let total = 0;
        for (let lineItem of this.lineItems) {
            if (lineItem.rate !== undefined) {
                total += lineItem.units * lineItem.rate;
            } else if (lineItem.amount !== undefined) {
                total += lineItem.amount;
            }
        }
        return total;
    }
}
