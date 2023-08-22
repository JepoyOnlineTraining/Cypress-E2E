import { RegisterPage } from "../pages/registerpage"
// import registerPage from "../pages/registerpage"
const registerObj = new RegisterPage()
import registerData from '../../fixtures/registerData.json'

describe('Test Automation', ()=>{

    it('Register Flow', ()=>{

        registerObj.openUrl()

        registerObj.enterFirstName(registerData.firstName)

        registerObj.enterLastName(registerData.lastName)

        registerObj.enterEmail(registerData.email)

        registerObj.enterPhone(registerData.telephone)

        registerObj.enterPassword(registerData.password)

        registerObj.acceptAgreement()

        registerObj.clickContinue()

    })


})