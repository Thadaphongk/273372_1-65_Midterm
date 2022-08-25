module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input + 1
        res.send(output.toString())
    },

     api1(req,res){
        x = parseInt(JSON.stringify(req.body['number']))
        console.log('number = '+x)
         x++
        output = x
         
        res.send(output.toString())
    },

    api2(req,res){
        num1 = parseInt(JSON.stringify(req.body['inputx']))
        num2 = parseInt(JSON.stringify(req.body['inputy']))
        console.log('inputx = '+num1)
        console.log('inputy = '+num2)
         gcd = (num1%num2)
         lcm = (num1*num2)/gcd
        
        res.send(lcm.toString())
    }

}