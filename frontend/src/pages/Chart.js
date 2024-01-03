import Breadcrumb from "../components/dashboard/Breadcrumb";
import ChartFour from "../components/dashboard/ChartFour";
import ChartOne from "../components/dashboard/ChartOne";
import ChartThree from "../components/dashboard/ChartThree";
import ChartTwo from "../components/dashboard/ChartTwo";

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
