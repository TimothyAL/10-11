const vendingMachine = (products, amount, id) => {
    try {
        const item = products[id]
        if (item['cost'] > amount) {
            return('Not enough money for this product')
        }
        let pending_change = item['cost'] - amount
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
    }
}