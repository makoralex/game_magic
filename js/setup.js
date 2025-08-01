'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function(evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
};

var openPopup = function() {
    setup.classList.remove('hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
    setup.classList.add('hidden');
    document.querySelector('.setup-similar').classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};


//появление менюшки нажатем на аватарку
setupOpen.addEventListener('click', function() {
    openPopup();
    });
    
//закрытие менюшки нажатием на крестик
setupClose.addEventListener('click', function() {
    closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {closePopup();}
});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['голубенький', 'розовенький', 'красненький', 'желтенький']

var wizards = [
    {
        name: WIZARD_NAMES[0],
        coatColor: 'rgba(102, 180, 243, 1)',
        eyesColor: 'rgba(16, 113, 192, 1)'
    },
    {
        name: WIZARD_NAMES[1],
        coatColor: 'rgba(241, 97, 203, 1)',
        eyesColor: 'rgba(177, 10, 143, 1)'
    },
    {
        name: WIZARD_NAMES[2],
        coatColor: 'rgba(245, 110, 76, 1)',
        eyesColor: 'rgba(209, 52, 0, 1)'
    },
    {
        name: WIZARD_NAMES[3],
        coatColor: 'rgba(255, 240, 106, 1)',
        eyesColor: 'rgba(255, 250, 200, 1)'
    }
];

for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
   

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

     similarListElement.appendChild(wizardElement);
};
