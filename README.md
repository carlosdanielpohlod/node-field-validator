<h2> Usage example: </h2>

const Validator = require('path/validator')

const result = Validator.validate({ </b>

            [{ </b>
                fields:[ </b>
                  {    </b>
                      value: data.value, </b>
                      rules:{ </b>
                          maxLength:10, </b>
                          minLength:4, </b>
                          regex:'[0-9]' </b>
                      } </b>
                  }, </b>
                  { </b>
                      value:data.value, </b>
                      rules:{ </b>
                          maxLength:10, </b>
                          minLength:4, </b>
                          regex:'[0-9]' </b>
                      } </b>
                  } </b>
              ]}
              
              </b>

value: the field value
rules: validation rules (maxLength, minLength, regex)

shold return a object as : { status: boolean, msg:[object(s)] }

The msg field contains the error messages.
By: Me
<b> help to improve the project </b>
