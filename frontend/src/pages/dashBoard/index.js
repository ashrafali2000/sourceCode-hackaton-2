import CardFour from "../../components/dashboard/CardFour.js";
import CardOne from "../../components/dashboard/CardOne.js";
import CardThree from "../../components/dashboard/CardThree.js";
import CardTwo from "../../components/dashboard/CardTwo.js";
import ChartOne from "../../components/dashboard/ChartOne.js";
import ChartThree from "../../components/dashboard/ChartThree.js";
import ChartTwo from "../../components/dashboard/ChartTwo.js";
import ChatCard from "../../components/dashboard/ChatCard.js";
import MapOne from "../../components/dashboard/MapOne.js";
import TableOne from "../../components/dashboard/TableOne.js";

const DashBoard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default DashBoard;
