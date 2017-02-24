export function formatPrice(cents) {
  console.log(`never: ${cents} centavitos`);
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
