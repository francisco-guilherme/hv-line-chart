import { useTranslation } from "react-i18next";
import { HvGrid } from "@hitachivantara/uikit-react-core";
import { HvLineChart } from "@hitachivantara/uikit-react-viz";

const Project: React.FC = () => {
  const { t } = useTranslation("project");

  return (
    <HvGrid container>
      <HvGrid item xs={12}>
        <HvLineChart
          data={{
            Month: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            "Sales Target": [
              5929,
              2393,
              1590,
              7817,
              4749,
              1702,
              undefined,
              2909,
              6732,
              3098,
              2119,
              2146,
            ],
          }}
          groupBy="Month"
          measures="Sales Target"
          emptyCellMode="void"
        />
      </HvGrid>
    </HvGrid>
  );
};

export default Project;
