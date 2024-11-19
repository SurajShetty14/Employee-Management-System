import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaTimesCircle, FaUsers } from "react-icons/fa"
import SummaryCard from "./SummaryCard"


const AdminSummary = () => {
  return (
    <div className="p-6 ">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-6">Dashboard Overview</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"> 
            <SummaryCard icon={<FaUsers/>} text="Total Employees" number={15} color="bg-indigo-500"/>
            <SummaryCard icon={<FaBuilding/>} text="Total Departments" number={5} color="bg-amber-500"/>
            <SummaryCard icon={<FaBuilding/>} text="Monthly Salary" number="$654" color="bg-rose-500"/>
        </div>

        <div className="mt-12">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-1 mb-6">Leave Details</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <SummaryCard icon={<FaFileAlt/>} text="Leave Applied" number={5} color="bg-indigo-500"/>
            <SummaryCard icon={<FaCheckCircle/>} text="Leave Approved" number={2} color="bg-emerald-500"/>
            <SummaryCard icon={<FaHourglassHalf/>} text="Leave Pending" number={4} color="bg-amber-500"/>
            <SummaryCard icon={<FaTimesCircle/>} text="Leave Rejected" number={1} color="bg-rose-500"/>
            </div>
        </div>
    </div>
  )
}

export default AdminSummary