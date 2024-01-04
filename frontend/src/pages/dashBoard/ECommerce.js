import CardFour from "../../components/dashboard/CardFour";
import CardOne from "../../components/dashboard/CardOne";
import CardThree from "../../components/dashboard/CardThree";
import CardTwo from "../../components/dashboard/CardTwo";
import ChartOne from "../../components/dashboard/ChartOne";
import ChartThree from "../../components/dashboard/ChartThree";
import ChartTwo from "../../components/dashboard/ChartTwo";
import ChatCard from "../../components/dashboard/ChatCard";
import MapOne from "../../components/dashboard/MapOne";
import TableOne from "../../components/dashboard/TableOne";

const ECommerce = () => {
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

export default ECommerce;
