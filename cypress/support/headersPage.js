export class HeaderPage{
    getUsername(usuario){
        cy.get(`[id^="user_${usuario}"]`)
    }
    
}