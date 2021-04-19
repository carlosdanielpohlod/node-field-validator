<h2> Usage example: </h2>

const Validator = require('path/validator')

const result = Validator.validate({ </b>

            [{
                fields:[ 
                  {    
                      value: data.value, 
                      rules:{ 
                          maxLength:10, 
                          minLength:4, 
                          regex:'[0-9]' 
                      } 
                  }, 
                  { 
                      value:data.value, 
                      rules:{ 
                          maxLength:20, 
                          minLength:3, 
                          regex:"^(0|([1-9][0-9]*))(\\.[0-9]+)?$" 
                      } 
                  } 
            ]}

value: the field value
rules: validation rules (maxLength, minLength, regex)

shold return a object as : { status: boolean, msg:[object(s)] }

The msg field contains the error messages.
By: Me
<b> help to improve the project </b>
