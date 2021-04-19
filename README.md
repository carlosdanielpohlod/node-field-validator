<h2> Usage example: </h2>

const Validator = require('path/validator')

const result = Validator.validate({
            [{
                fields:[
                  {   
                      field: field.value,
                      rules:{
                          maxLength:10,
                          minLength:4,
                          regex:'[0-9]'
                      }
                  },
                  {
                      field:field.value,
                      rules:{
                          maxLength:10,
                          minLength:4,
                          regex:'[0-9]'
                      }
                  }
              ]}

shold return a object as : {status: boolean, msg:[object(s)]}

The msg field contains the error messages.

<b> help to improve the project </b>
