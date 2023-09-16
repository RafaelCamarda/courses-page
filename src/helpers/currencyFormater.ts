export function currencyFormater(value: number | undefined): string {
  if(!value) return ''
  
  return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
}