"use strict";

/**
 * O módulo http é nativo do NodeJS, ele expões diversos métodos.
 *
 * Dentre eles temos o createServer, que é o principal método para criar um servidor http.
 *
 * Esse método recebe uma função de callback (função passada de argumento para outra função) como parâmetro
 * que será chamada sempre que o servidor receber uma requisição.
 * Essa função de callback recebe 2 parâmetros:
 * - request: representa a requisição feita pelo cliente, contendo dados do método HTTP, headers, URL etc. Ele é uma
 * instância do http.IncomingMessage (https://nodejs.org/dist/latest-v18.x/docs/api/http.html#class-httpincomingmessage)
 * - response: representa a resposta que o servidor enviará de volta. Através dese carinha conseguimos definir
 * o status, cabeçalho e corpo da resposta (https://nodejs.org/dist/latest-v18.x/docs/api/http.html#http_class_http_serverresponse).
 */

import http from "node:http";

const data = JSON.stringify([
  {
    id: "A1",
    name: "Vacuum Cleaner",
    rrp: "99.99",
    info: "The most powerful vacuum in the world.",
  },
  {
    id: "A2",
    name: "Leaf Blower",
    rrp: "303.33",
    info: "This product will blow your socks off.",
  },
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Delicious overpriced chocolate.",
  },
]);

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Definição do status da resposta e do tipo da conexão
  res.writeHead(200, { "Content-Type": "application/json" });

  // Envio de dados JSON e encerra a conexão
  res.end(data);
});

server.listen(3000);

console.log("Server listening on port http://localhost:3000/");
