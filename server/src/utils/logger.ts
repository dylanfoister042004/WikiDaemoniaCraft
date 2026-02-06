export const logger = (msg: string) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${msg}`);
};
