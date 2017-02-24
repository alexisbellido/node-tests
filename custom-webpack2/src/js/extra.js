export function formatPrice(cents) {
  console.log(`Formating test 2 ${cents} cents`);
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
