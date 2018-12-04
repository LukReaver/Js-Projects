## Form Validation Module

####[Examples link:](https://lukreaver.github.io/Js-Projects/SurveyForm-ValidationModule/index.html)

- Validation works with input types:
`text,email,data,tel,number,select.radio.checkbox,textarea`

- To use module you should create module instance, and pass like argument:
   + first argument: form object,
   + second argument: object with user options or empty object{}. 

- Usage example:
``` 
const valObj = new Valid($form,{
    htmlApiValidate: false, 
    regexValidate: true,
});
```
- Default method validation is HTML5 validation API.
 - To change on regex validation you should change default options on:
 
  ``` 
  {
    htmlApiValidate: false, 
    regexValidate: true,
   }
```

- URL is retrieve from html form attribute. U can pass your own url in options object:
    like : "url: 'https://...'"

- Default options:
```
defaultOption = {
       // HTML5 validation API - default
       htmlApiValidate: true
       // RegEx validation 
       regexValidate: false,

      // Input Validation attribut or type:
      inputParametr: `[required], [type='checkbox']`,

      // Regex Patterns:
      textInputReg: '[^\w]+',
      emailInputReg: '^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$',
      numberInputReg: '(\(?\+?\d{1,3}\)?[\s-]+)?\(?\d{1,3}\)?[\s-]+\d[\s-]?\d{2}[\s-]?\d{2}',
      telInputReg: '^\d{3}\-\d{3}\-\d{3}$',
      dateInputReg: '^\d{2}\.\d{2}\.\d{4}$',
      textAreaInputReg: '[^\w]+',

      // default bootstrap class
      classError: 'is-invalid',
      classSukces: 'is-valid',

      // Message class
      classMessage: 'succesMesage',           

      // get action and method from html default
      url: form.getAttribute('action')
    }
 ```