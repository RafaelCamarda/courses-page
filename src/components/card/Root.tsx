interface RootProps {
  thumbnail: string;
  title: string;
  description: string;
  buyLink: string;
  children?: React.ReactNode;
}

export function Root({
  thumbnail,
  title,
  description,
  buyLink,
  children
}: RootProps) {
  return (
    <a 
      href={buyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col max-w-[440px] w-full rounded-2xl overflow-hidden bg-violet-100 transition duration-200 hover:shadow-[0_11px_20px_rgba(0,0,0,0.1)] h-full"
    >
      <img
        src={thumbnail}
        alt={title}
        className="object-contain"
      />
      <div className="p-6 flex flex-1 flex-col">
        <h2>{title}</h2>
        <p className="mt-0.5 text-gray-700">{description}</p>
        <div className={`flex flex-1 flex-col justify-between ${!children ? 'mt-4' : 'gap-4'}`}>
          {children}

          <a
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center h-14 bg-violet-600 rounded-2xl text-white font-medium transition duration-200 hover:brightness-90"
          >
            Comprar
          </a>
        </div>
      </div>
    </a>
  )
}