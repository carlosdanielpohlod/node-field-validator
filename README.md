<h2> Usage example: </h2>

const Validator = require('path/validator')

const result = Validator.validate({ </b>
            [{ </b>
                fields:[ </b>
                  {    </b>
                      field: field.value, </b>
                      rules:{ </b>
                          maxLength:10, </b>
                          minLength:4, </b>
                          regex:'[0-9]' </b>
                      } </b>
                  }, </b>
                  { </b>
                      field:field.value, </b>
                      rules:{ </b>
                          maxLength:10, </b>
                          minLength:4, </b>
                          regex:'[0-9]' </b>
                      } </b>
                  } </b>
              ]} </b>

shold return a object as : {status: boolean, msg:[object(s)]}

The msg field contains the error messages.

<b> help to improve the project </b>
