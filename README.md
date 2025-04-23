# 🚀 Proyecto de Pruebas Automatizadas con Cypress

Este proyecto contiene una serie de pruebas automatizadas desarrolladas con **Cypress**, orientadas a validar el comportamiento y diseño del sitio principal de **Heroku**.

---

## 📂 Estructura de las pruebas

### 1. 🖼️ Pruebas de carga de imágenes y contenido  
**Archivo:** `Test1-Carga.cy.js`  
**Objetivo:** Validar que los elementos clave de la página principal (`/home`) se carguen correctamente y sean visibles.

**Casos cubiertos:**
- Verificar que el logo de Heroku sea visible y tenga el atributo `href` correcto.
- Verificar que el título principal contenga la palabra **"Cloud"**.

**Validaciones:**
- El logo debe ser visible y apuntar a `https://www.heroku.com`.
- El título principal debe contener **"Cloud"** y ser visible.

---

### 2. 🧭 Pruebas de navegación en la barra superior  
**Archivo:** `Test2-Navegacion.cy.js`  
**Objetivo:** Validar la funcionalidad de navegación en la barra superior de la página principal (`/home`).

**Casos cubiertos:**
- Navegación a la sección **"Products"**.
- Navegación a la sección **"Pricing"**.

**Anotaciones:**
- El elemento `#pricing-head` no es visible o no está disponible en el DOM, por lo que su validación fue comentada.

---

### 3. ⚡ Call-to-Action (CTA) - "Get Started for Free"  
**Archivo:** `Test3-Call.cy.js`  
**Objetivo:** Validar el comportamiento del botón **"Get Started for Free"**.

**Casos cubiertos:**
- Interceptar el clic en el botón y validar la redirección a `/signup`.

**Anotaciones:**
- El botón **no existe** actualmente en la página, lo que provoca que el test falle.

---

### 4. 📱 Pruebas de diseño responsivo  
**Archivo:** `Test4-Tamanos.cy.js`  
**Objetivo:** Verificar que el diseño del sitio sea responsivo en distintos tamaños de pantalla.

**Casos cubiertos:**
- Verificación en tamaños: **Desktop**, **Tablet** y **Mobile**.
- Validación de la visibilidad del menú superior en todos los tamaños.

**Anotaciones:**
- El botón **"Get Started for Free"** sigue sin estar presente, lo que provoca que el test falle.

---

### 5. ✉️ Pruebas del formulario de contacto  
**Archivo:** `Test5-Datos.cy.js`  
**Objetivo:** Validar el correcto funcionamiento del formulario en `/contact-sales`.

**Casos cubiertos:**
- Completar el formulario con datos desde el fixture `contactData.json`.
- Verificar que se muestre un mensaje de confirmación al enviar.

**Anotaciones:**
- El mensaje esperado **"Thank you"** no coincide con el mensaje real.
- El campo **website** genera un error y fue comentado.

---

### 6. ⏱️ Pruebas de desempeño y estabilidad  
**Archivo:** `Test6-Rendimiento.cy.js`  
**Objetivo:** Medir el tiempo de carga de la página desde el inicio hasta que el logo sea visible.

**Casos cubiertos:**
- Uso de la API de rendimiento del navegador.
- Validación de que el tiempo de carga sea menor a **3000 ms**.

**Validaciones:**
- El tiempo de carga se registra en la consola de Cypress.
- Debe ser **< 3000 ms**.

---

## ▶️ Cómo ejecutar las pruebas

1. Instala las dependencias del proyecto:
   ```bash
   npm install
