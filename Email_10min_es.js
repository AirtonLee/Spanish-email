// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists

function waitForElemente(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function g_Appointment() {
    let dateTime = Array.from(document.querySelectorAll('cuf-form-field')).filter(function (e) { return e.innerText.includes('Time') })[0].innerText.split('\n')[1]
    dateTime = new Date(dateTime)
    let date = dateTime.toLocaleDateString()
    let time = dateTime.toLocaleTimeString().split(':').slice(0, 2).join(':')
    return `${date} às ${time}`
}

function returnName() {
    document.querySelector('img[class*="photo"]').click()
    setTimeout(function () {
        g_agent_name = document.querySelector("profile-details > div > div.name").innerText
    }, 300)
    return g_agent_name
}

function returnPhone() {
    if (document.querySelector('[aria-label="View hidden phone number"]') && document.querySelector('[aria-label="View hidden phone number"]').click()) {
    }
    setTimeout(function () {
        g_phoneNumber = document.querySelector('[debugid="pii-phone-value"]').innerText.replace(' ', '')
    }, 1000)
    return g_phoneNumber
}

function returnTemplate() {
    return `<p dir="auto"><em>Tenga en cuenta que, de acuerdo con la Política de privacidad de Google, todas las capturas de pantalla y los enlaces a continuación y arriba son solo para uso interno. No los comparta/reenvíe externamente.</em></p><div id="email-body-content-top-content" style="font:normal 13px/17px Roboto,sans-serif;display:block" dir="auto"><p dir="ltr"><br></p><p dir="auto">Hola <span style="font-weight: bold;">${g_client_name}<br></span></p> <p dir="auto" style="font-weight: normal;">Aquí es <span style="font-weight: bold;">${g_agent_name}</span> del equipo de soluciones técnicas de Google. Intenté llamar al siguiente número: <span style="font-weight: bold;">${g_phoneNumber}</span>, sin exito, tendrias otro numero para contactarte?&nbsp;<br><br>Su consultoría fue programada para hoy, con el fin de ayudarlo a implementar la siguiente tarea:<br></p> <div class="" dir="auto" style=""><b>${g_tasks}</b><br></div> <p dir="auto" style=""><br>en tu sitio web:&nbsp;<a href="https://www.google.com/url?q=https%3A%2F%2Fmateriais.samaria.com.br%2Fsanta-maria-fretamento%23rd-form-joq3m2vy&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1pvHphYLvEHTevx_D9BwjB" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><b>${g_website}</b></a><br><br> </p> <p dir="auto" style="font-weight: normal;">Intentaré devolverte la llamada en 10 minutos, si lo prefieres, puedes acceder a nuestro enlace de reunión:<span style="font-weight: bold;"> </span><span style="font-weight: bold;">&lt;&lt;Link do Meet&gt;&gt;<br><br></span></p> <p dir="auto" style="font-weight: normal;"><br>Atentamente,</p> <div dir="ltr" align="left" style="font-weight: normal;"> <table style="border: none; border-collapse: collapse; line-height: normal;"> <colgroup> <col width="348"> </colgroup> <tbody> <tr style="height:15pt"> <td style="vertical-align:top;overflow:hidden;overflow-wrap:break-word;"> <p dir="ltr" style="line-height:1.345;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 10pt; font-family: &quot;Google Sans&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span> </p> <div dir="ltr" style="margin-left:1.5pt;" align="left"> <table style="border:none;border-collapse:collapse;"> <colgroup> <col width="79"> <col width="199"> </colgroup> <tbody> <tr style="height:45pt"> <td style="border-right:solid #d5d5d5 0.75pt;vertical-align:middle;padding:0pt 15pt 0pt 0pt;overflow:hidden;overflow-wrap:break-word;"> <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"> <a href="https://www.youtube.com/watch?v=HcjR6ZngQcw"><span style="font-size: 12pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;"><span style="border:none;display:inline-block;overflow:hidden;width:59px;height:60px;"><img src="https://lh6.googleusercontent.com/s9W_iuqDskGYArSoaWmMk5I28zFZCCvnETFlD-3jYTxZ4tYWULEFafgmS3FgrTWM4kd2qNv6C8iXxxu4qPH8zEPRfS9VUfSsdjDU8tge9Get8XDma9p6noph2-gW9VEg2VJJ2EvmBEvpe6LE9vHzm1NskYZv_P8kPCSkKRY_X_4fg1qpt0JCyCnyvXTiYw" width="59" height="60" style="margin-left:0px;margin-top:0px;"></span></span></a> </p> </td> <td style="border-left:solid #d5d5d5 0.75pt;vertical-align:top;padding:0pt 0pt 0pt 15pt;overflow:hidden;overflow-wrap:break-word;"> <p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"> <span style="font-size: 9pt; font-family: &quot;Google Sans&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-style: italic; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span> </p> <div dir="ltr" style="margin-left:0pt;" align="left"> <table style="border:none;border-collapse:collapse;"> <colgroup> <col width="177"> </colgroup> <tbody> <tr style="height:13pt"> <td style="vertical-align:top;padding:0pt 0pt 4pt 0pt;overflow:hidden;overflow-wrap:break-word;"> <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"> <span style="font-size: 9pt; font-family: &quot;Google Sans&quot;, sans-serif; color: rgb(0, 0, 0); font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">
Equipo de soluciones técnicas de Google</span></p> </td> </tr> </tbody> </table> </div><br> </td> </tr> </tbody> </table> </div><br> </td> </tr> </tbody> </table> </div> <p dir="auto" style=""><span style="font-style: italic;">Código de referência – <b>${g_id_case}</b></span></p> <p dir="ltr" style="font-weight: normal;"><span style="font-style: italic;">No elimine el código de referencia para que podamos responder más rápidamente. Gracias,</span></p> <p dir="ltr" style="font-weight: normal;"><span style="font-style: italic;">&nbsp;</span></p> <p dir="auto" style="font-weight: normal;"><span style="font-weight: bold; font-style: italic;">Termos</span><span style="font-style: italic;">: 
Al responder a este mensaje, autoriza al especialista en implementación de Google a brindarle orientación sobre la instalación. do&nbsp;</span><b>${g_tasks}&nbsp;</b><span style="font-style: italic;">en su sitio web y/o campaña y/o cuenta de Google Analytics, según sea necesario. Usted confirma y reconoce que todos los cambios sugeridos y/o implementados por Google se llevarán a cabo bajo su propio riesgo. Google no garantiza ni promete resultados a partir de la implementación de estos cambios. Además, Google no será responsable de los efectos de estos cambios, que incluyen, entre otros, cualquier aumento en el gasto relacionado con las campañas de Google Ads, de los cuales usted será totalmente responsable. También acepta validar que el sitio web continúa funcionando según lo previsto.</span></p> <p dir="auto" style="font-weight: normal;"><span style="font-weight: bold; font-style: italic;">Observação</span><span style="font-style: italic;">: Le recomendamos que haga una copia de seguridad completa de su sitio antes de realizar cualquier cambio. Además, NO debe compartir las credenciales de su sitio conmigo ni con otras personas en Google. Finalmente, realizar cambios en su sitio web/cuenta mientras trabajamos en la solicitud puede causar la pérdida de algunos cambios/configuraciones. Le recomendamos que no realice ningún cambio en su sitio/cuenta hasta que se completen las implementaciones recomendadas..</span></p> </div>`
}

// Adiciona o email do cliente como destinatário
function setCustumerEmail() {
    document.querySelector('span[class*="button-text"]').click()
    setTimeout(function () {
        Array.from(document.querySelectorAll('span[class*="label"]')).filter(function (e) {
            return e.innerText === 'Customer'
        })[0].click()
    }, 500)
}

function emailInMenu() {
    waitForElemente('[role="menu"]').then((elm) => {
        console.log('[+] create email 1')
        elm.dispatchEvent(new Event('focus', { 'bubbles': true }))
    });

    waitForElemente('[aria-label="Create new email"]').then((elm) => {
        console.log('[+] create email 2')
        elm.click()
    });
}

// Altera o email para o email do Techincal Solutions
function technicalSolutions() {
    waitForElemente('[buttoncontent][class*="address"]').then((elm) => {
        console.log('[+] techincal')
        elm.click()
    });

    waitForElemente('[id="email-address-id--technical-solutions@google.com"]').then((elm) => {
        console.log('[+] techincal 2')
        elm.click()
    });
}

// Retorna o conteúdo do email a ser editado
function myCase() {
    return Array.from(document.querySelectorAll('[id="email-body-content-top-content"]')).pop()
}

// Salva a edição realizada
function saveDraft() {
    Array.from(document.querySelectorAll('[contenteditable="true"]')).filter(function (e) {
        return e.matches('[aria-label="Email body"]')
    })[0].focus()
    document.execCommand('insertText', false, ' ')
}

document.querySelector('[debug-id="dock-item-home"]').click()
var g_agent_name = returnName()
var g_phoneNumber = returnPhone()
var g_id_case = document.querySelector('[src="https://pulse-tracker.corp.google.com/tracking_script.js"]').getAttribute('data-case-id')
var g_client_name = document.querySelector('title').innerText.split(' ')[1]
var g_website = Array.from(document.querySelectorAll('[href*="google"][target="_blank"]'))[0].innerText
//var g_website = Array.from(document.querySelectorAll('cuf-form-field')).filter(function (e) { return e.innerText.includes('Website') })[0].innerText.split('\n')[1]
var g_appointment = g_Appointment()
var g_tasks = Array.from(document.querySelectorAll('cuf-form-field')).filter(function (e) { return e.innerText.includes('Tasks') })[0].querySelector('div[class*="form-value"]').innerText.split('\n').join(', ')


setCustumerEmail()
setTimeout(function () {
    emailInMenu()
    setTimeout(function () {
        var g_template = returnTemplate()
        technicalSolutions()
        console.log(g_agent_name)
        myCase().innerHTML = g_template
        saveDraft()
    }, 1500)
}, 500)
