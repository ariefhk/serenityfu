export const formatRupiah = (number: string | number) => {
  let numbers = Number(number)
  return numbers?.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })
}
