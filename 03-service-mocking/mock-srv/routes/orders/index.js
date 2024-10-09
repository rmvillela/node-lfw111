"use strict";

export default async function (fastify, opts) {
  fastify.get("/:category", { websocket: true }, (socket, request) => {
    socket.send(JSON.stringify({ id: "A1", total: 3 }));
  });
}
