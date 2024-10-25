// Importing GOT to make HTTP requests
import { got } from "got";

// API URL definition
const API = "http://localhost:3000";

// Categories definition
const categories = ["confectionery", "electronics"];

// Auxiliary methods to generate logs
export const log = (msg = "Back office for My App") => {
  console.log(`\n${msg}\n`);
};
export const error = (msg) => {
  console.error(`\n${msg}\n`);
};

// Orders update through id and quantity
export async function update(id, amount) {
  log(`Updating order ${id} with amount ${amount}`);

  try {
    if (isNaN(+amount)) {
      error("Error: <AMOUNT> must be a number");
      process.exit(1);
    }

    await got.post(`${API}/orders/${id}`, {
      json: { amount: +amount },
    });

    log(`Order ${id} updated with amount ${amount}`);
  } catch (error) {
    error(error.message);
    process.exit(1);
  }
}

// Create product
export async function add(...args) {
  const [category, id, name, amount, info] = args;

  log(`Adding item ${id} with amount ${amount}`);

  try {
    if (isNaN(+amount)) {
      error(`Error: <AMOUNT> must be a number`);
      process.exit(1);
    }

    await got.post(`${API}/${category}`, {
      json: {
        id,
        name,
        rrp: +amount,
        info: info.join(" "),
      },
    });

    log(`Item "${id}: ${name}" has been added to the ${category} category`);
  } catch (error) {
    error(error.message);
    process.exit(1);
  }
}
