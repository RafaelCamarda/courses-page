interface PricingRootProps {
  children: React.ReactNode
}

export function PricingRoot({ children }: PricingRootProps) {
  return (
    <div className="flex flex-col mt-4">
      {children}
    </div>
  )
}

interface OriginalPriceProps {
  children: React.ReactNode
}

export function OriginalPrice({ children }: OriginalPriceProps) {
  return (
    <p className="text-gray-600 text-sm">De: <span className="line-through">{children}</span></p>
  )
}

interface CurrentPriceProps {
  children: React.ReactNode
}

export function CurrentPrice({ children }: CurrentPriceProps) {
  return (
    <p className="font-bold text-gray-900">
      Por:
      <span className="text-[#087F5B]"> {children}</span>
    </p>
  )
}