/* FormValidationModule */
/* Version: 1.0 */

'use strict';

class Valid {
    constructor(form, options) {
        this.form = form;

        if (!(options instanceof Object)) {
            console.log(new Error('options is not an object'))
        }

        let defaultOption = {
            // HTML5 validation API - default
            htmlApiValidate: true,
            // RegEx validation 
            regexValidate: false,
            // Input Validation attribut or type:
            inputParametr: `[required], [type='checkbox']`,
            // Regex Patterns:
            textInputReg: '[^\w]+',
            emailInputReg: '^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$',
            numberInputReg: '(\(?\+?\d{1,3}\)?[\s-]+)?\(?\d{1,3}\)?[\s-]+\d{3}[\s-]?\d{2}[\s-]?\d{2}',
            telInputReg: '^\d{3}\-\d{3}\-\d{3}$',
            dateInputReg: '^\d{2}\.\d{2}\.\d{4}$',
            textAreaInputReg: '[^\w]+',
            // default bootstrap class
            classError: 'is-invalid',
            classSukces: 'is-valid',
            // Message class
            classMessage: 'succesMesage',

            // get action from html default
            url: form.getAttribute('action'),
        }

        this.options = Object.assign({}, defaultOption, options);
        this.form.setAttribute('novalidate', 'novalidate');

        this.inputAddListener();
        this.formSubmit(this.form);
    }

    formSubmit(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // this.send(form)
            this.submitValidation(this.form)
        })
    };

    submitValidation(form) {
        let testv;
        let submitValidationPass = true;

        let inputform = form.querySelectorAll(this.options.inputParametr);

        for (let el of inputform) {
            if (el.tagName === 'INPUT') {
                if (el.type.toUpperCase() === 'TEXT') {
                    testv = this.inputTest(el, this.options.textInputReg);
                }
                if (el.type.toUpperCase() === 'EMAIL') {
                    testv = this.inputTest(el, this.options.emailInputReg);
                }
                if (el.type.toUpperCase() === 'NUMBER') {
                    testv = this.inputTest(el, this.options.emailInputReg);
                }
                if (el.type.toUpperCase() === 'TEL') {
                    testv = this.inputTest(el, this.options.telInputReg);
                }
                if (el.type.toUpperCase() === 'DATE') {
                    testv = this.inputTest(el, this.options.dateInputReg);
                }
                if (el.type.toUpperCase() === 'RADIO') {
                    testv = this.dotsBoxTest(el);
                }
                if (el.type.toUpperCase() === 'CHECKBOX') {
                    testv = this.dotsBoxTest(el);
                }
            }
            if (el.tagName.toUpperCase() === 'SELECT') {
                testv = this.inputSelectTest(el);
            }
            if (el.tagName.toUpperCase() === 'TEXTAREA') {
                testv = this.inputTest(el, this.options.textAreaInputReg);
            }
            if (!testv) {
                submitValidationPass = false
            }
        };
        if (submitValidationPass) {
            this.send(form)
        }
    }

    send(form) {
        let button = form.submit;
        button.disable = true;
        button.classList.add('elemBusy')

        let formData = new FormData(form);

        fetch(this.options.url, {
                method: 'post',
                body: formData
            })
            .then(resp => resp.json())
            .then(resp => {
                button.disable = false;
                button.classList.remove('elemBusy')
                let message = document.querySelector(`.${this.options.classMessage}`);
                message.style.visibility = 'visible';
                message.style.left = '0';
                setTimeout(() => {
                    message.style.visibility = 'hidden';
                    message.style.left = '-99999';
                }, 2000);
                // console.log(resp)
            })
            .catch(err => {
                button.disable = false;
                button.classList.remove('elemBusy')
                console.log(err)
            })

    }


    inputAddListener() {
        let inputform = this.form.querySelectorAll(this.options.inputParametr);
        for (let el of inputform) {
            if (el.tagName === 'INPUT') {
                if (el.type.toUpperCase() === 'TEXT') {
                    el.addEventListener('blur', () => {
                        this.inputTest(el, this.options.textInputReg);
                    })
                }
                if (el.type.toUpperCase() === 'EMAIL') {
                    el.addEventListener('blur', () => {
                        this.inputTest(el, this.options.emailInputReg);
                    })
                }
                if (el.type.toUpperCase() === 'NUMBER') {
                    el.addEventListener('blur', () => {
                        this.inputTest(el, this.options.emailInputReg);
                    })
                }
                if (el.type.toUpperCase() === 'TEL') {
                    el.addEventListener('blur', () => {
                        this.inputTest(el, this.options.telInputReg);
                    })
                }
                if (el.type.toUpperCase() === 'DATE') {
                    el.addEventListener('blur', () => {
                        this.inputTest(el, this.options.dateInputReg);
                    })
                }
                if (el.type.toUpperCase() === 'RADIO') {
                    el.addEventListener('click', () => {
                        this.dotsBoxTest(el);
                    })
                }
                if (el.type.toUpperCase() === 'CHECKBOX') {
                    el.addEventListener('click', () => {
                        this.dotsBoxTest(el);
                    })
                }
            }
            if (el.tagName.toUpperCase() === 'SELECT') {
                el.addEventListener('change', () => {
                    this.inputSelectTest(el);
                })
            }
            if (el.tagName.toUpperCase() === 'TEXTAREA') {
                el.addEventListener('input', () => {
                    this.inputTest(el, this.options.textAreaInputReg);
                })
            }
        }
    }

    dotsBoxTest(input) {
        let dotsBox = input.form.querySelectorAll(`[name='${input.name}']`);
        let dotsBoxIsChecked = input.form.querySelectorAll(`[name='${input.name}']:checked`);

        if (dotsBoxIsChecked.length) {
            for (let el of dotsBox) {
                this.showFieldValidation(el, true);
            }
            return true;
        } else {
            for (let el of dotsBox) {
                this.showFieldValidation(el, false);
            }
            return false;
        }
    };

    inputSelectTest(input) {
        if (input.value != '') {
            this.showFieldValidation(input, true);
            return true;
        } else {
            this.showFieldValidation(input, false);
            return false;
        }
    };

    inputTest(input, regexPattern) {
        let val = input.value;
        let reg = new RegExp(regexPattern, 'g');

        if (this.options.htmlApiValidate) {
            if (input.checkValidity()) {
                this.showFieldValidation(input, true);
                return true;
            } else {
                this.showFieldValidation(input, false);
                return false;
            }
        } else if (this.options.regexValidate) {
            if (reg.test(val)) {
                this.showFieldValidation(input, true);
                return true;
            } else {
                this.showFieldValidation(input, false);
                return false;
            }
        }
    };

    showFieldValidation(input, status) {
        if (status) {
            input.classList.remove(this.options.classError);
            input.classList.add(this.options.classSukces);
        } else {
            input.classList.remove(this.options.classSukces);
            input.classList.add(this.options.classError);
        }
    }
}