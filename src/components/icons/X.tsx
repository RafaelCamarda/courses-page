interface XProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function X({ color = 'currentColor', ...props }: XProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0.996821 1.8667L11.0866 15.2512L0.933105 26.1334H3.21825L12.1076 16.6059L19.29 26.1334H27.0664L16.409 11.996L25.8598 1.8667H23.5746L15.3879 10.6413L8.77326 1.8667H0.996821ZM4.3573 3.53665H7.92981L23.7054 24.4632H20.1329L4.3573 3.53665Z" fill={color}/>
    </svg>
  )
}