import clsx from "clsx";
import css from "./VoteOptions.module.css";

const buttons = [
  { name: "Good", value: "good" },
  { name: "Neutral", value: "neutral" },
  { name: "Bad", value: "bad" },
  { name: "Reset", value: "reset" },
];

const VoteOptions = () => {
  return (
    <ul className={css.container}>
      {buttons.map((item) => (
        <li key={item.value}>
          <button className={clsx(css.button, css[item.value])}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default VoteOptions;
