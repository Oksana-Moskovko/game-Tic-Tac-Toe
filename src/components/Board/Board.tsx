import {
  calculateStatus,
  calculateTurns,
  calculateWinner,
} from "../../function/calculate";
import type { Square } from "../../types/squares";
import SquareComponent from "../Square/Square";
import css from "./Board.module.css";

interface BoardProps {
  xIsNext: boolean;
  squares: Square[];
  onPlay: (nextSquares: Square[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div className={css.board}>
        {squares.map((square, squareIndex) => (
          <SquareComponent
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}
