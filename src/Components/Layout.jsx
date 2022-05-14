import { Card, IconButton } from "ui-neumorphism";
import { NavLink, Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHome, mdiCashMultiple, mdiBookOpen, mdiWallet } from "@mdi/js";
import "./scss/appnavbar.scss";
export default function Layout() {
  return (
    <Card dark className="allcont">
      <div className="mainscreen">
        <Outlet />
      </div>
      <div className="appnavbar">
        <NavLink to="/home">
          <div className="Home">
            <IconButton className="ico" dark size="large">
              <Icon className="con" path={mdiHome} size={1.1} />
            </IconButton>
          </div>
        </NavLink>
        <NavLink to="/income" style={{}}>
          <div className="Income">
            <IconButton
              className="ico"
              dark
              text={false}
              size="large"
              color="var(--success)"
            >
              <Icon path={mdiWallet} size={1.1} />
            </IconButton>
          </div>
        </NavLink>
        <NavLink to="/expense" style={{}}>
          <div className="Expense">
            <IconButton
              className="ico"
              dark
              text={false}
              size="large"
              color="var(--warning)"
            >
              <Icon path={mdiCashMultiple} size={1.1} />
            </IconButton>
          </div>
        </NavLink>
        <NavLink to="/history" style={{}}>
          <div className="History">
            <IconButton
              className="ico"
              dark
              text={false}
              size="large"
              color="var(--success)"
            >
              <Icon path={mdiBookOpen} size={1.1} />
            </IconButton>
          </div>
        </NavLink>
      </div>
    </Card>
  );
}
