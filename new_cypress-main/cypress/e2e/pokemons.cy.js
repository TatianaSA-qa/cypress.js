describe('Покупка аватара', function () {

    it('е2е тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[type="email"]').type('USER_LOGIN');
         cy.get('input[type="password"]').type('USER_PASSWORD');
         cy.get('button[type="submit"]').click();
         cy.wait(2000);
         cy.get('.header__id-img > .k_main_photo').click({ force: true });
         cy.get('[href="/shop"] > .history-info').click(); 
         cy.get('.available > button').first().click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); 
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); 
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('TATIANA SERYAKOVA');
         cy.get('.pay-btn').click(); 
         cy.get('#cardnumber').type('56456');  
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');    
    });
 }); 