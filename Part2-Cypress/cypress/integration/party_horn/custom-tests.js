describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
});

describe('Slider changes when volume input changes', () => {
  it('Slider Test', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
      .then(function($el) {
        expect($el).to.have.value(75);
      });
  });
});

describe('Number changes when slider input changes', () => {
  it('Slider Test 2', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');

    cy.get('#volume-number')
      .then(function($el) {
        expect($el).to.have.value(33);
      });
  });
});

describe('Audio changes when slider input changes', () => {
  it('Audio Test', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');

    cy.get('#horn-sound')
      .then(function($el) {
        expect($el).to.have.prop('volume', 0.33);
      });
  });
});

describe('Image and sound sources changes when select party horn button', () => {
  it('Image Source Test', () => {
    cy.get('#radio-party-horn')
      .check();
    
    cy.get('#horn-sound')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
      });
  });

  it('Audio Source Test', () => {
    cy.get('#radio-car-horn')
      .check();
    
    cy.get('#sound-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/images/car.svg')
      });
  });
});

describe('Volume image changes when increasing volume', () => {
  //Level 0
  it('Volume Level 0 Test', () => {
    cy.get('#volume-slider')
      .invoke('val', 0)
      .trigger('input');

    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
      });
  })

  //Level 1
  it('Volume Level 1 Test', () => {
    cy.get('#volume-slider')
      .invoke('val', 1)
      .trigger('input');

    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
      });
  });

  //Level 2
  it('Volume Level 2 Test', () => {
    cy.get('#volume-slider')
      .invoke('val', 50)
      .trigger('input');

    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
      });
  });

      //Level 3
  it('Volume Level 3 Test', () => {
    cy.get('#volume-slider')
      .invoke('val', 86)
      .trigger('input');

    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
      });
  });
});


describe('Number changes when slider input changes', () => {
  it('Empty Text Box Test', () => {
    cy.get('#volume-number')
      .invoke('val', '')
      .trigger('input');

    cy.get('#honk-btn')
      .then(function($el) {
        expect($el).to.have.attr('disabled');
      });
  });

  it('Non Numerical Text Box Test', () => {
    cy.get('#volume-number')
      .invoke('val', 'asdf')
      .trigger('input');
    
    cy.get('#honk-btn')
      .then(function($el) {
        expect($el).to.have.attr('disabled');
      });
  });

  it('Invalid Number Text Box Test', () => {
    cy.get('#volume-number')
      .invoke('val', -9)
      .trigger('input');
    
    cy.get('#honk-btn')
      .click()
      .then(function($el) {
        cy.on('input:invalid', (err, runnable) => {
          expect(err.message);
        })
      });
  });
});