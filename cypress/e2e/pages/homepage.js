


class HomePage {


    weblocators = {

        search : "#search",
        searchbutton : "button[class='btn btn-default btn-lg']",
        cartbuton : "#cart",
        buttonGroup : "div.button-group button",
        successmessage: "div.alert-success"


    }

    searchForProduct(product){

        cy.get(this.weblocators.search).type(product)

        cy.get(this.weblocators.searchbutton).click()

    }

    addProductToCart(){

        cy.get(this.weblocators.buttonGroup).first().click()
        
    }

    verifySuccessMessage(){

        return cy.get(this.weblocators.successmessage)

    }


}


export default new HomePage();