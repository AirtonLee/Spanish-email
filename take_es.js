function g_Appointment() {
  let dateTime = Array.from(document.querySelectorAll('cuf-form-field')).filter(function (e) { return e.innerText.includes('Time') })[0].innerText.split('\n')[1]
  dateTime = new Date(dateTime)
  let date = dateTime.toLocaleDateString()
  let time = dateTime.toLocaleTimeString().split(':').slice(0, 2).join(':')
  return `${date} às ${time}`
}

document.querySelector('[debug-id="dock-item-home"]').click()
var g_id_case = document.querySelector('[src="https://pulse-tracker.corp.google.com/tracking_script.js"]').getAttribute('data-case-id')
var g_client_name = document.querySelector('title').innerText.split(' ')[1]
var g_tasks = Array.from(document.querySelectorAll('cuf-form-field')).filter(function (e) { return e.innerText.includes('Tasks') })[0].innerText.replace('Tasks\n', '').split('\n').join(', ')
var g_website = Array.from(document.querySelectorAll('cuf-form-field')).filter(function (e) { return e.innerText.includes('Website') })[0].innerText.split('\n')[1]

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
    document.querySelector('[role="menu"]').dispatchEvent(new Event('focus', { 'bubbles': true }))
    setTimeout(function() {
      document.querySelector('[aria-label="Create new email"]').click()
    }, 500)
}

// Altera o email para o email do Techincal Solutions
function technicalSolutions() {
  document.querySelector('[buttoncontent][class*="address"]').click()
  setTimeout(function() {
    document.querySelector('[id="email-address-id--technical-solutions@google.com"]').click()
  }, 500)
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

setCustumerEmail()
setTimeout(function() {
  setTimeout(function () {
    var g_appointment = g_Appointment()
    var g_template = `<p dir="auto"><em>Tenga en cuenta que, de acuerdo con la Política de privacidad de Google, todas las capturas de pantalla y los enlaces a continuación y arriba son solo para uso interno. No los comparta/reenvíe externamente.</em></p><div id="email-body-content-top-content" style="font:normal 13px/17px Roboto,sans-serif;display:block" dir="auto"><p dir="ltr"><br></p><p dir="auto">Hola <span style="font-weight:bold"><span class=fi">${g_client_name}</span></span>,</p><p dir="auto">Muchas gracias por programar una consulta con el equipo de soluciones técnicas de Google. Su representante de Google ha solicitado esta llamada en su nombre y le ayudaremos en el caso <span style="font-weight:bold"><span class=fi">${g_id_case}</span></span> al sitio web <span style="font-weight:bold"><span class=fi">${g_website}</span></span>.</p><p dir="auto">El agente del equipo de Soluciones técnicas se comunicará con usted en la fecha/hora programada: <span style="font-weight:bold"><span class=fi">${g_appointment}</span></span>.&nbsp;</p><p dir="auto">Por favor revise su bandeja de entrada y acceda a la invitación en su calendario. Siga las instrucciones específicas allí contenidas y confirme su participación. Para prepararse para nuestra llamada, revise la lista de tareas pendientes <a href="https://support.google.com/google-ads/answer/11605860?hl=es-ES" style="color:rgb(26,115,232)" target="_blank">vinculada aqui </a>y completar las solicitudes.</p><p dir="ltr">Si tiene alguna pregunta antes de la llamada o desea agregar más participantes a la reunión, simplemente háganoslo saber respondiendo a este mensaje o comunicándose con su representante de Google. Estamos felizes de trabajar con usted!</p><br><p dir="auto">Muchas gracias!</p><div dir="ltr" align="left"><table style="border:none;border-collapse:collapse;line-height:normal"><colgroup><col width="361"></colgroup><tbody><tr style="height:151.75pt"><td style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden"><br><div dir="ltr" style="margin-left:0pt" align="left"><table style="border:none;border-collapse:collapse"><colgroup><col width="82"><col width="197"></colgroup><tbody><tr style="height:67.5pt"><td style="border-right:solid #d5d5d5 0.75pt;vertical-align:middle;padding:0pt 15pt 0pt 0pt;overflow:hidden"><p dir="ltr" style="line-height:1.656;margin-top:0pt;margin-bottom:0pt"><span style="font-size:12pt;font-family:Arial;color:rgb(0,0,0);vertical-align:baseline;white-space:pre-wrap"><span style="border:none;display:inline-block;overflow:hidden;width:59px;height:59px"><img src="https://lh3.googleusercontent.com/y6QudS2DJDVsUlt-v6ncpiUKx9DbLrX9Y9kSCmhcnnHjMIFSLjXgX2l5KCP9TZ89o3TM22bi6kyNi6d7lVWEyqvMfsgEDS3Al2O9xpWKStOCy1Li5y-Ht58_1T8iX7dy5uUBvAQgf19njRB27eBGEIuPuv9hSkEKupeEe8vxhAt9yddmXrconSRRgvGxgVo" width="59" height="59" style="margin-left:0px;margin-top:0px"></span></span></p></td><td style="border-left:solid #d5d5d5 0.75pt;vertical-align:top;padding:0pt 0pt 0pt 15pt;overflow:hidden"><br><div dir="ltr" style="margin-left:0pt" align="left"><table style="border:none;border-collapse:collapse"><colgroup><col width="138"></colgroup><tbody><tr style="height:40.5pt"><td colspan="2" style="vertical-align:top;padding:0pt 0pt 4pt 0pt;overflow:hidden"><p dir="ltr" style="line-height:1.656;margin-top:0pt;margin-bottom:0pt"><span style="font-size:9pt;font-family:&quot;Google Sans&quot;,sans-serif;color:rgb(56,58,53);vertical-align:baseline;white-space:pre-wrap">Equipo de soluciones técnicas de Google</span></p></td></tr></tbody></table></div><br></td></tr></tbody></table></div><br><p dir="auto" style="line-height:1.656;margin-top:0pt;margin-bottom:0pt"><span style="font-size:8pt;color:rgb(0,0,0);font-style:italic;vertical-align:baseline;white-space:pre-wrap">No elimine el código de referencia para que podamos responder lo más pronto possible. Gracias.</span></p><br></td></tr></tbody></table></div><p dir="ltr"><span style="font-weight:bold;font-style:italic">Términos: </span><span style="font-style:italic"> Al responder este mensaje, confirmas que autorizas al especialista técnico a guiarte por el proceso de instalación de los códigos pertinentes en tu sitio web, campaña o cuenta de Analytics según sea necesario. Mediante este mensaje, declaras y aceptas que todos los cambios sugeridos o implementados por Google se llevarán a cabo por tu propia voluntad y bajo tu responsabilidad. Google no garantiza ni promete ningún resultado como consecuencia de su implementación. Además, Google no se hace responsable de los posibles efectos de estos cambios, incluido, entre otros, el aumento de los gastos que se pueda producir en tus campañas de Google Ads, de los que tú serás el único responsable. También aceptas confirmar que tu sitio web sigue funcionando del modo previsto.</span></p><br><p dir="auto"><span style="font-weight:bold;font-style:italic">Nota: </span><span style="font-style:italic"> Le recomendamos que haga una copia de seguridad completa de su sitio antes de realizar cualquier cambio. Además, NO debe compartir las credenciales de su sitio conmigo ni con otras personas en Google. Finalmente, realizar cambios en su sitio web/cuenta mientras trabajamos en la solicitud puede causar la pérdida de algunos cambios/configuraciones. Le recomendamos que no realice ningún cambio en su sitio/cuenta hasta que se completen las implementaciones recomendadas.</span></p></div>`
    emailInMenu()
    setTimeout(function () {
      technicalSolutions()
      myCase().innerHTML = g_template
      saveDraft()
    }, 1500)
  }, 500)
}, 500)
