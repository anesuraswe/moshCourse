import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z.number({ message: "Amount is required." }).min(0.1).max(400),
  category: z.enum(categories, { error: "Category is required." }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message} </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message} </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}{" "}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message} </p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;


// App.tsx
/**
 * import { useState } from "react";
 import ExpenseList from "./expense-tracker/components/ExpenseList";
 import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
 import ExpenseForm from "./expense-tracker/components/ExpenseForm";
 import categories from "./expense-tracker/categories";
 
 function App() {
   const [selectedCategory, setSelectedCategory] = useState("");
   const [expenses, setExpenses] = useState([
     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
     { id: 2, description: "bbb", amount: 10, category: "Utilities" },
     { id: 3, description: "ccc", amount: 10, category: "Utilities" },
     { id: 4, description: "ddd", amount: 10, category: "Utilities" },
   ]);
 
   const visibleExpenses = selectedCategory
     ? expenses.filter((e) => e.category === selectedCategory)
     : expenses;
 
   return (
     <div>
       <div className="mb-5">
         <ExpenseForm
           onSubmit={(expense) =>
             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
           }
         />
       </div>
       <div className="mb-3">
         <ExpenseFilter
           onSelectCategory={(category) => setSelectedCategory(category)}
         />
       </div>
       <ExpenseList
         expenses={visibleExpenses}
         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
       />
     </div>
   );
 }
 
 export default App;
 
 */