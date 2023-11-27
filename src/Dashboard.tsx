import Chart from "./Chart";
import { DatePickerWithRange } from "./components/ui/daterangepicker";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./components/ui/select";

interface Dashboardprops {
  name: string;
  containerStyle?: React.CSSProperties;
  onClickDashboardItem?: (dashboardItem: typeof Chart) => void;
}

const Dashboard: React.FC<Dashboardprops> = ({ name, containerStyle, onClickDashboardItem }) => {
  return (
    <div className="flex">
      <DatePickerWithRange className="m-2" />
      <div className="m-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="cMonth">Current Month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <span className="m-2 p-2">Compared to </span>
      <div className="m-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="p90days">Previous 90 days</SelectItem>
              <SelectItem value="p30days">Previous 30 days</SelectItem>
              <SelectItem value="pMonth">Previous Month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Dashboard;
