
  ///<reference types ="cypress"/>
  
describe('Google', ()=>{

    it("verify google ",()=>{
        cy.request({
            method: 'POST',
            url: 'https://www.googleapis.com/oauth2/v4/token',
            body: {
              grant_type: 'refresh_token',
              client_id:"",
              client_secret:"",
              refresh_token:"",

            },
          }).then(({ body }) => {
            const { id_token } = body
            cy.visit("https://www.trip.com")
              cy.request('POST', 'https://www.trip.com/api/login', { jwt:id_token})
                .then( ({ body: { accessToken } }) => {
                  cy.setCookie('googleLogin', accessToken)
                })
          })
    })
})

