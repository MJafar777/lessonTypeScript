import categories from "../categories";

// import { categories } from "../../../App";

interface Props {
  onSelectCategories: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategories }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategories(event.target.value)}
    >
      <option>All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
