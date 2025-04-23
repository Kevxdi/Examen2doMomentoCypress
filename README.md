Proyecto de Pruebas Automatizadas con Cypress
1. Pruebas de carga de imágenes y contenido
Archivo: Test1-Carga.cy.js

Objetivo: Validar que los elementos clave de la página principal de Heroku (/home) se carguen correctamente y sean visibles.
Casos cubiertos:
Verificar que el logo de Heroku sea visible y tenga el atributo href correcto.
Verificar que el título principal contenga la palabra "Cloud".
Validaciones:
El logo debe ser visible y apuntar a https://www.heroku.com.
El título principal debe contener "Cloud" y ser visible.
2. Pruebas de navegación en la barra superior
Archivo: Test2-Navegacion.cy.js

Objetivo: Validar la funcionalidad de navegación en la barra superior de la página principal de Heroku (/home).
Casos cubiertos:
Navegación a la sección "Products".
Navegación a la sección "Pricing".
Anotaciones:
El elemento #pricing-head no es visible o no está disponible en el DOM, por lo que la validación correspondiente fue comentada.
3. Call-to-Action (CTA) - "Get Started for Free"
Archivo: Test3-Call.cy.js

Objetivo: Validar la funcionalidad del botón "Get Started for Free" en la página principal de Heroku (/home).
Casos cubiertos:
Interceptar el clic en el botón y validar la redirección a /signup.
Anotaciones:
El botón "Get Started for Free" no existe en la página, lo que provoca que el test falle.
4. Pruebas de diseño responsivo
Archivo: Test4-Tamanos.cy.js

Objetivo: Validar que el diseño de la página principal de Heroku (/home) sea responsivo y se adapte correctamente a diferentes tamaños de pantalla.
Casos cubiertos:
Verificar el diseño en dispositivos Desktop, Tablet y Mobile.
Validar que el menú superior sea visible en todos los tamaños de pantalla.
Anotaciones:
El botón "Get Started for Free" no existe en la página, lo que provoca que el test falle.
5. Pruebas del formulario de contacto
Archivo: Test5-Datos.cy.js

Objetivo: Validar que el formulario de contacto en la página "Contact Sales" de Heroku (/contact-sales) funcione correctamente.
Casos cubiertos:
Rellenar el formulario con datos del archivo fixture contactData.json.
Validar que se muestre un mensaje de confirmación tras el envío.
Anotaciones:
El mensaje esperado "Thank you" no coincide con el mensaje real, que es:
El campo website genera un error y no permite ingresar datos, por lo que fue comentado.
6. Pruebas de desempeño y estabilidad
Archivo: Test6-Rendimiento.cy.js

Objetivo: Medir el tiempo de carga de la página principal de Heroku (/home) desde el inicio de la visita hasta que el logo sea visible.
Casos cubiertos:
Medir el tiempo de carga utilizando la API de rendimiento del navegador.
Validar que el tiempo de carga sea inferior a 3000 ms.
Validaciones:
El tiempo de carga debe ser menor a 3000 ms.
El tiempo de carga se registra en la consola de Cypress.
Cómo ejecutar las pruebas
Instala las dependencias del proyecto:
Abre Cypress con el siguiente comando:
Selecciona el archivo de prueba que deseas ejecutar en la interfaz de Cypress.
Verifica los resultados en la consola de Cypress.
