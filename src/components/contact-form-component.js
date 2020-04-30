const buildForm = ()=>{

    const formContainer = document.getElementById('contactUsContainer');
    const formHTML = `
            <form action="#" >
            <div>
                <label class="contactUs--Form__label" for="name">
                    Nombre:
                </label>
                <input class="contactUs--Form__input" type="text" placeholder="Tu Nombre" id="name">
            </div>

            <div>
                <label class="contactUs--Form__label"  for="email">
                    Correo Electrónico:
                </label>
                <input class="contactUs--Form__input"  type="text" placeholder="Tu Correo" id="email">
            </div>

            <div class="contactUs--message">
                <label class="contactUs--Form__label"  for="message">
                    ¿Qué te gustaría enseñar?
                </label>
                <textarea name="message" id="message" class="contactUs--Form__textArea" cols="30" rows="10" placeholder="Su mensaje"></textarea>
            </div>

            <button class="contactUs--send">
                Enviar
            </button>
        </form>
    `;
    formContainer.innerHTML = formHTML;
}

export {
    buildForm
}