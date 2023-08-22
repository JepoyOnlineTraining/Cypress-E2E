

export class RegisterPage {


    weblocators = {

        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        confirmPass: "#input-confirm",
        subsribe: "input[value='1'][name='newsletter']",
        agree: "input[value='1'][name='agree']",
        continue: "input[value='Continue']"


    }

    openUrl(){

        cy.visit(Cypress.env('URL'))

    }


    enterFirstName(FName){

        cy.get(this.weblocators.firstName).type(FName)

    }


    enterLastName(LName){

        cy.get(this.weblocators.lastName).type(LName)

    }

    enterEmail(Email){

        cy.get(this.weblocators.email).type(Email)

    }

    enterPhone(Phone){

        cy.get(this.weblocators.telephone).type(Phone)

    }

    enterPassword(Password){

        cy.get(this.weblocators.password).type(Password, {log:false})
        cy.get(this.weblocators.confirmPass).type(Password, {log:false})


    }

    acceptAgreement(){

        cy.get(this.weblocators.agree).click()

    }

    clickContinue(){

        cy.get(this.weblocators.continue).click()

    }
}
