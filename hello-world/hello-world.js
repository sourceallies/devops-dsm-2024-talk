export async function handler(event) {
  console.log(`got event ${JSON.stringify(event)}`);
  return {
    message: "Hello World",
  };
}
