import { IncomeCard } from "./components/IncomeCard";
import { ExpenseCard } from "./components/ExpenseCard";
import { DebitCard } from "./components/DebitCard";
import { BarChart } from "./components/BarChart";
import { CircleChart } from "./components/CircleChart";

export default function Dashboard() {
  return (
    <div class="bg-gray-100 p-8">
        <div className="flex">
            <DebitCard/>
            <IncomeCard/>
            <ExpenseCard/>
        </div>
        <div className="flex">
            <BarChart/>
            <CircleChart/>
        </div>

      
      
    </div>
  );
}
