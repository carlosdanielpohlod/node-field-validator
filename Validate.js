
class Validate {
    validate(config){
        const log={status:true,msg:[]}
        const fields = config.fields
        for(let object in fields){
            const rules = fields[object].rules
            for(let method in rules){
                const result = this[String(method)](fields[object].field, rules)
                result ? log['msg'].push(result) : null
            }
        }
        log.msg.length > 0 ? log.status = false : null
        
        return log
    }


    regex(data, config){
        const reg = new RegExp(config.regex)
        data = String(data)
        if(!reg.exec(data)){
           return 'Formato inválido'
           
        }
    }
    minLength(data, config){
        data = String(data)
        if(data.length < config.minLenght){
            return `tamanho inválido: minimo ${config.minLength} !`
        }
        
    }
    maxLength(data, config){
        data = String(data)
        if(data.length > config.maxLength){
            return `tamanho inválido, maximo ${config.maxLength} !`
        }
    }
}
module.exports = new Validate()