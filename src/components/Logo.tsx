import logoImg from '../assets/logo3.png';

export default function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <div className={`flex items-center gap-1 leading-none ${className}`}>
      <img
        src={logoImg}
        alt="Mission GoodLife"
        className={`h-auto w-38 object-contain transition-all duration-500 ${inverted ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}