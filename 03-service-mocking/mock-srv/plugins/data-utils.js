"use strict";

import fp from "fastify-plugin";

const catToPrefix = {
  electronics: "A",
  confectionery: "B",
};

const calculateID = (idPrefix, data) => {
  const sorted = [...new Set(data.map(({ id }) => id))]; // [A1, A2, A3...]
  const nextValue = Number(sorted.pop().slice(1)) + 1; // A3
  return `${idPrefix}${nextValue}`;
};

export default fp(async function (fastify, opts) {
  fastify.decorate("mockDataInsert", function (request, category, data) {
    const idPrefix = catToPrefix[category]; // category pode ser eletronics ou confectionery
    const id = calculateID(idPrefix, data);

    data.push({ id, ...request.body });

    return data;
  });
});
