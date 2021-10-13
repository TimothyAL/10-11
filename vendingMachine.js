const products = [
    {'name':'cookie', 'cost': 50},
    {'name':'chips', 'cost': 20},
    {'name':'brownie', 'cost': 100},
    {'name':'soda', 'cost': 100},
    {'name':'apple', 'cost': 200},
    {'name':'pizza', 'cost': 250},
    {'name':'cake', 'cost': 520}
]

const vendingMachine = (products, amount, id) => {
    try {
        const item = products[Number(id)]
        if (typeof item === 'undefined'){
            throw new RangeError()
        }
        if (item['cost'] > Number(amount)) {
            return('Not enough money for this product')
        }
        let pending_change = Number(amount) - item['cost']
        let change = []
        while (pending_change > 0) {
            if (pending_change >= 500){
                pending_change -= 500
                change.push(500)
                continue
            }if(pending_change > 200){
                pending_change -= 200
                change.push(200)
                continue
            }if(pending_change > 100){
                pending_change -= 100
                change.push(100)
                continue
            }if(pending_change > 50){
                pending_change -= 50
                change.push(50)
                continue
            }if(pending_change > 20){
                pending_change -= 20
                change.push(20)
                continue
            }
            pending_change -= 10
            change.push(10)           
        }
        return({'product': item['name'], 'change': change})
    }catch(err){
        if (err instanceof RangeError) {
            return('Enter a valid product number')
        }
        else{return err}
    }
}

let result = vendingMachine(products, process.argv[2], process.argv[3])
console.log(result)