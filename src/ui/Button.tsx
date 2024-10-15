type ButtonsProps = {
  label: string;
};

function Button({ label }: ButtonsProps) {
  return (
    <button className="bg-secondary text-primary hover:text-secondary hover:bg-primary rounded-full px-4 py-2 transition-all duration-300 hover:bg-opacity-90">
      {label}
    </button>
  );
}

export default Button;
