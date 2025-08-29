import css from "./Square.module.css";

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};
export default function SquareComponent({ value, onSquareClick }: SquareProps) {
  return (
    <>
      <button className={css.button} onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
