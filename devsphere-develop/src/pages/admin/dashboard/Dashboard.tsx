import { faGauge } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "@src/components/admin/PageHeader";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation("site");

  return (
    <div>
      <PageHeader title={t("Dashboard")} icon={faGauge} />
    </div>
  );
};

export default Dashboard;
