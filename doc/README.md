# Etiqueta de cambio de nombre automático

<!-- [! [Versión de Marketplace](https://vsmarketplacebadge.apphb.com/version/formulahendry.auto-rename-tag.svg)] (https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename -tag) [! [Instalaciones](https://vsmarketplacebadge.apphb.com/installs/formulahendry.auto-rename-tag.svg)] (https://marketplace.visualstudio.com/items?itemName=formulahendry.auto -rename-tag) [! [Rating](https://vsmarketplacebadge.apphb.com/rating/formulahendry.auto-rename-tag.svg)] (https://marketplace.visualstudio.com/items?itemName=formulahendry .auto-rename-tag) [! [Estado de compilación](https://travis-ci.org/formulahendry/vscode-auto-rename-tag.svg?branch=master)] (https: // travis-ci. org / formulahendry / vscode-auto-rename-tag) -->

Cambie automáticamente el nombre de la etiqueta HTML / XML emparejada, igual que Visual Studio IDE.

## Caracteristicas

- Cuando cambie el nombre de una etiqueta HTML / XML, cambie automáticamente el nombre de la etiqueta HTML / XML emparejada

## Usos

! [Uso] (images / use.gif)

## Configuración

Agregue la entrada en `auto-rename-tag.activationOnLanguage` para configurar los idiomas en que se activará la extensión.
Por defecto, es `[" * "]` y se activará para todos los idiomas.
`json { "auto-rename-tag.activationOnLanguage": [ "html", "xml", "php", "javascript" ] }`**Nota:** La configuración debe establecerse con el ID de idioma definido en [Código VS](https://github.com/Microsoft/vscode/tree/master/extensions). Tomando [definición de javascript](https://github.com/Microsoft/vscode/blob/master/extensions/javascript/package.json) como ejemplo, necesitamos usar`javascript`para`.js`y`.es6`, use`javascriptreact`para`.jsx`. Entonces, si desea habilitar esta extensión en el archivo`.js`, debe agregar`javascript` en settings.json.

## Cambiar registro

Ver registro de cambios [aquí](CHANGELOG.md)

## Cuestiones

Envíe los [problemas](https://github.com/formulahendry/vscode-auto-rename-tag/issues) si encuentra algún error o tiene alguna sugerencia.

## Contribución

Bifurca el [repo](https://github.com/formulahendry/vscode-auto-rename-tag) y envía solicitudes de extracción.
