/* ==== EXPENSE class created to handle EXPENSE things ============ */
class Expense {
    constructor(text, units, rate) {
        this.text = text;
        this.units = units;
        this.rate = rate;
    }

    getTotal() {
        return this.units * this.rate;
    }
}


/* ==== FEE class created to handle FEE things ============ */
class Fee {
    constructor(text, amount) {
        this.text = text;
        this.amount = amount;
    }

    getTotal() {
        return this.amount;
    }
}


/* ==== INVOICE class created to handle INVOICE things ========*/
class Invoice {
    constructor(invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        this.lineItems = [];
    }

    addExpense(text, units, rate) {
        const lineItem = new Expense(text, units, rate);
        this.lineItems.push(lineItem);
    }

    addFee(text, amount) {
        const lineItem = new Fee(text, amount);
        this.lineItems.push(lineItem);
    }

    getTotal() {
        let total = 0;
        for (let lineItem of this.lineItems) {
            total += lineItem.getTotal();
        }
        return total;
    }
}