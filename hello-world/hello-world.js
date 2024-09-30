export function handler(event) {
  console.log(`got event ${event}`);
  return {
    message: "Hello World",
  };
}
