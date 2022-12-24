import styles from "./styles.module.css";
import logo from "../../assets/logo-fgi.svg";
import { Link } from "react-router-dom";
import { dummyData, headerTitle } from "constants/dummyData";
import { utils, writeFile } from "xlsx";
import { useEffect } from "react";

export default function LandingPage() {
  const handleDownloadSheet = () => {
    const data = dummyData.data;

    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Employee Data");

    utils.sheet_add_aoa(worksheet, [headerTitle], { origin: "A1" });

    const max_width = data.reduce((w, r) => Math.max(w, r.name.length), 10);
    worksheet["!cols"] = [{ wch: max_width }];

    writeFile(workbook, "Dummy.xlsx");
  };

  useEffect(() => {
    fetch(
      "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=D7B3F4958D27EFBEAA64CA9550F080CE&steamids=76561198829916006",
    )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <h1 className={styles.label}>Irham's Personal Website</h1>
      <div className={styles.navigation}>
        <Link className={styles["nav-item"]} to="/store">
          Store
        </Link>
        <span className={styles["nav-item"]} onClick={handleDownloadSheet}>
          Download Sheet
        </span>
      </div>
    </div>
  );
}
