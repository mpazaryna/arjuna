describe('www: Resources component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=resources--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Resources!');
    });
});
