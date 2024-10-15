#!/usr/bin/env node

import got from "got";

const API = "http://localhost:3000";

const usage = (msg = "Back office for My App") => {
  console.log(`\n${msg}\n`);
  console.log("Usage: cmd <ID> <AMOUNT>");
};

/**
 * Recupera os argumentos da linha de comando retirando os dois primeiros itens do array que o process.argv retorna
 * O primeiro item contém o path completo para o binário atual do node.
 * O segundo item contém o path completo para o arquivo que está executando. Nesse caso do cmd.js.
 */
const argv = process.argv.slice(2);

/**
 *  se não tem argumentos, chama o método usage e finaliza
 */
if (argv.length < 2) {
  usage();
  process.exit(1);
}

const [argID, argAmount] = argv;

const amount = parseInt(argAmount);

if (isNaN(amount)) {
  usage("Error: <AMOUNT> must be a number");
  process.exit(1);
}

try {
  await got.post(`${API}/orders/${argID}`, {
    json: { amount },
  });

  console.log(`Order ${argID} updated with amount ${amount}`);
} catch (err) {
  console.log(err.message);
  process.exit(1);
}
