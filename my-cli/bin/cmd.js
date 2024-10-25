#!/usr/bin/env node

import { Command } from "commander";
import { update } from "../src/utils";

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
  .action(async (id, amount) => await update(id, amount));

// Parse dos argumentos de process.argv
program.parse();
