#!/usr/bin/env node

import { Command } from "commander";
import { add, update } from "../src/utils.js";

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

// Criação do comando para implementar a nova funcionalidade de cadastro de produto
program
  .command("add")
  .description("Create new product")
  .argument("<CATEGORY>", "Product Category")
  .argument("<ID>", "Product ID")
  .argument("<NAME>", "Product Name")
  .argument("<AMOUNT>", "Product RRP")
  // INFO é opcional
  .argument("[INFO...]", "Product Description")
  .action(
    async (category, id, name, amount, info) =>
      await add(category, id, name, amount, info)
  );

// Parse dos argumentos de process.argv
program.parse();
