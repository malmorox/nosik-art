/* SOBRE MÍ */

//lista de ayuda del formulario de los inputs de tipo radio
document.addEventListener('DOMContentLoaded', function() {
    const HELP_LIST = document.querySelector('.nosik-contact-form-helplist');
    const TEXTAREA = document.querySelector('.nosik-contact-form-textarea');

    const HELP_OPTIONS = [
        'Quiero saber más detalles de una obra en concreto',
        'Me gustaría hablar personalmente con el artista',
        'Necesito contactar para cualquier otra cosa'
    ];

    HELP_OPTIONS.forEach((textOption) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'help-option';
        label.appendChild(input);

        //muestra el textarea cuando se hace clic en cualquier label
        label.addEventListener('click', function() {
            TEXTAREA.style.display = 'block';
        });

        let span = document.createElement('span');
        span.textContent = textOption;
        label.appendChild(span);

        li.appendChild(label);
        HELP_LIST.appendChild(li);
    });
});