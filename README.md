# Bot de Discord para ventas y devoluciones de botellas

Este bot de Discord está diseñado para llevar un registro de ventas y devoluciones de botellas en un servidor de Discord. El bot escucha mensajes en canales específicos y actualiza la información de inventario y transacciones basándose en los mensajes recibidos.

## Características

- Escucha mensajes en un canal de ventas y registra la cantidad de botellas vendidas.
- Escucha mensajes en un canal de devoluciones y registra la cantidad de botellas devueltas.
- Actualiza el inventario de botellas y la cantidad total de dinero basándose en las ventas y devoluciones.

## Instalación

1. Clona este repositorio o descárgalo en tu computadora.
2. Ejecuta `npm install` para instalar las dependencias necesarias.
3. Crea un archivo `config.json` en la carpeta del proyecto con la siguiente estructura:

```json
{
  "token": "YOUR-TOKEN",
  "sellchannelId": "YOUR-SELL-CHANNEL-ID",
  "responseChannelId": "YOUR-RESPONSE-CHANNEL-ID",
  "inventoryChannelId": "YOUR-INVENTORY-CHANNEL-ID",
  "buyChannelId": "YOUR-BUY-CHANNEL-ID"
}
```
Reemplaza YOUR-TOKEN con el token de tu bot de Discord y los demás campos con las ID de los canales correspondientes en tu servidor de Discord.

4. Ejecuta node bot.js para iniciar el bot.

## Uso
El bot escucha mensajes en los canales especificados en config.json. Para registrar una venta o devolución de botellas, envía un mensaje en el canal correspondiente con el siguiente formato:

Para ventas: + CANTIDAD venta-botella (por ejemplo: + 10 venta-botella)
Para devoluciones: + CANTIDAD (por ejemplo: + 5)
El bot actualizará automáticamente la información de inventario y transacciones en los canales correspondientes.

## Licencia
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para obtener más información.

Guarda este contenido en un archivo llamado `README.md` en la carpeta raíz de tu proyecto. El archivo README.md se mostrará automáticamente en la página principal de tu repositorio en GitHub y proporcionará información sobre el proyecto y cómo utilizarlo.
