
describe('My TestSuite', ()=>{


    it('verify navigation across pages', ()=>{

        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?/route=common/home")

        let brokenLink = 0;
        let activeLink = 0;

        cy.get('a').each(($link, index)=>{

            const href = $link.attr('href')

            if(href){

                cy.request({url:href, failOnStatusCode:false}).then((response)=>{


                   if(response.status >= 400){

                        cy.log(`****link  ${index + 1} is Broken Link******* ${href}`)
                        brokenLink++;

                   } else {

                        cy.log(`****link ${index + 1} is Active Link*****`)
                        activeLink++;
                   }


                })

            }

        }).then(($links)=>{

            const totalLinks = $links.length
            cy.log(`**** total links **** ${totalLinks}`)
            cy.log(`Total number of active links ${activeLink}`)
            cy.log(`Total number of broken links ${brokenLink}`)

        })

    })


})