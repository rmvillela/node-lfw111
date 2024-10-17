#!/usr/bin/env node

import got from "got";
import { Command } from "commander";

const API = "http://localhost:3000";

const usage = (msg = "Back office for My App") => {
  console.log(`\n${msg}\n`);
};

async function updateItem(id, amount) {
  usage(`Updating order ${id} with amount ${amount}`);

  try {
    if (isNaN(+amount)) {
      usage("Error: <AMOUNT> must be a number");
      process.exit(1);
    }
    // Use GOT to make a POST request to the API
    await got.post(`${API}/orders/${id}`, {
      json: { amount: +amount },
    });
    // Log the result to the console
    usage(`Order ${id} updated with amount ${amount}`);
  } catch (err) {
    // If there is an error, log it to the console and exit
    console.error(err.message);
    process.exit(1);
  }
}

const program = new Command();

// Criação do programa
program
  .name("my-cli")
  .description("Back office para o Programa de Estoque")
  .version("1.0.0");

// Criação do comando de fazer o update de um pedido
program
  .command("update")
  .argument("<ID>", "Order ID")
  .argument("<AMOUNT>", "Order Amount")
  .action(async (id, amount) => await updateItem(id, amount));

// Parse dos argumentos de process.argv
program.parse();
