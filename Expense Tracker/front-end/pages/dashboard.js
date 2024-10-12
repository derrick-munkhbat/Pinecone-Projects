import { IncomeCard } from "../components/IncomeCard";
import { ExpenseCard } from "../components/ExpenseCard";
import { DebitCard } from "../components/DebitCard";
import { BarChart } from "../components/BarChart";
import { CircleChart } from "../components/CircleChart";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="grid grid-cols-3">
        <DebitCard />
        <IncomeCard />
        <ExpenseCard />
      </div>
      <div className="grid grid-flow-col">
        <BarChart />
        <CircleChart />
      </div>
    </div>
  );
}
