/// <reference types="cypress" />       

context('finance', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')  
        cy.get('#data-table tbody tr').should('have.length', 0)
 });


    it('Cadastrar entradas', () => { 

        cy.get('#transaction .button').click()        // mapeado por id + classe  
        cy.get('#description').type('Salario')        // mapeado por id
        cy.get('[name=amount]').type('100')           // mapeado por atributos
        cy.get('[type=date]').type('2023-04-19')      // idem
        cy.get('button').contains('Salvar').click()   // mapeado por tipo e valor  
        
        cy.get('#data-table tbody tr').should('have.length', 1)
 });

    it('Cadastrar saídas', () => {  

        cy.get('#transaction .button').click()        // mapeado por id + classe  
        cy.get('#description').type('Escola')         // mapeado por id
        cy.get('[name=amount]').type('-50')           // mapeado por atributos
        cy.get('[type=date]').type('2023-04-19')      // idem
        cy.get('button').contains('Salvar').click()   // mapeado por tipo e valor  
        
 });

         it('Remover entrads e saídas', () => {
            const entrada = 'Salário'
            const saida   = 'Escola' 

        cy.get('#transaction .button').click()          
        cy.get('#description').type('Salario')        
        cy.get('[name=amount]').type('100')           
        cy.get('[type=date]').type('2023-04-19')    
        cy.get('button').contains('Salvar').click()

        cy.get('#transaction .button').click()       
        cy.get('#description').type('Escola')        
        cy.get('[name=amount]').type('-50')          
        cy.get('[type=date]').type('2023-04-19')      
        cy.get('button').contains('Salvar').click() 

        cy.contains('Salario')       // Elemento pai=td ; Buscar da linha salario
        .parent()
        .find('img[onclick*=remove]')  // abreviado apenas para o remove
        .click()

        cy.get('#data-table tbody tr').should('have.length', 1)
            
});

    it.only('Validar o saldo com algumas transações', () => {

        const entrada = 'Salário'
        const saida   = 'Escola' 

    cy.get('#transaction .button').click()          
    cy.get('#description').type('Salario')        
    cy.get('[name=amount]').type('100')           
    cy.get('[type=date]').type('2023-04-19')    
    cy.get('button').contains('Salvar').click()

    cy.get('#transaction .button').click()       
    cy.get('#description').type('Escola')        
    cy.get('[name=amount]').type('-50')          
    cy.get('[type=date]').type('2023-04-19')      
    cy.get('button').contains('Salvar').click() 

    cy.get ('#data-table tbody tr') 
                                        
        })                                         
    })
