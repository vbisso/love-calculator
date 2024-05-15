interface Props {
  buttonLabel: string;
  onClick: () => void;
  color: string;
}
const Button = ({ buttonLabel, onClick, color }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      id="submit"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
