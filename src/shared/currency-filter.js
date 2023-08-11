export default function (amount, symbol) {
  return `${symbol}${Number(amount).toFixed(2)}`;
}
