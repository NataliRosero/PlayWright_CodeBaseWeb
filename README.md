# 🚀 PlayWright CodeBase Web
Repositorio para automatización de pruebas E2E usando Playwright, Page Object Model (POM) y emulación de navegador web.

**URL usada para automatizar:**
https://codebase.show/projects/realworld

**URL del repositorio de pruebas automatizadas:**
https://github.com/NataliRosero/PlayWright_CodeBaseWeb.git

---

## 📋 Requisitos
- Node.js v14+  
- npm  
- Navegador Chromium (se instala con Playwright)
---

## ⚙️ Instalación
```bash
git clone https://github.com/NataliRosero/PlayWright_CodeBaseWeb.git
cd PlayWright_CodeBaseWeb
npm install
npx playwright install

## 🏃‍♂️ Ejecutar las pruebas
npx playwright test

## 📋 Generar reporte con evidencias (aqui se puede ver el video de la ejecución y los datos del resultado que se imprimen en la consola al finalizar el test)
npx playwright show-report

## 🧪 Evidencias (screenshots + videos)
Las capturas y videos se guardan en la carpeta del proyecto docs/evidencias/ con sus respectivos nombres:
docs/evidencias/
├── ListadoAPlicaciones-exitoso.png
└── Video.webm
└── EvidenciaConsola.png (este es el resultado de las 3 primeras aplicaciones filtradas en el listado mostrado y la url exacta de donde se encuentra este listado)

## 🗂 Estructura del proyecto
      PlayWright_CodeBaseWeb/
      ├── docs/
      │   └── evidencias/
      ├── page/
      │   └── listAplication.js
      ├── tests/
      │   └── listApp.spec.js
      ├── playwright.config.js
      ├── package.json
      └── README.md

🧑‍💻 Autor
Natali Rosero



