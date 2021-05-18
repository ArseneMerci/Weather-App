var location =''
if(process.argv.length>3){
    for(let i=2;i<process.argv.length;i++){
        location = location + ' ' + process.argv[i]
    }
} else location = process.argv[2]

module.exports = location