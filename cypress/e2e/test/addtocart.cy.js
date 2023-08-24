import homepage from "../pages/homepage"
import testData from "../../fixtures/testData.json"

describe('My Test Suite', ()=>{

    before(()=>{

        cy.login(testData.Login.username, testData.Login.password)

    })


    it('Add to cart flow', ()=>{

        homepage.searchForProduct(testData.Product.product_name)

        homepage.addProductToCart()

        homepage.verifySuccessMessage().should('contain', testData.message.success_message)

        // Running test using headless mode
        // npx cypress run
        // npx cypress run --spec "path of test file"

    })

})