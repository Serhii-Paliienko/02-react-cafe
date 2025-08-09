import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  handleVote: (type: VoteType) => void;
  onReset: () => void;
}

const VoteOptions = ({ handleVote, onReset }: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={() => handleVote("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => handleVote("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => handleVote("bad")}
      >
        Bad
      </button>
      <button
        type="button"
        className={`${css.button} ${css.reset}`}
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};
export default VoteOptions;
