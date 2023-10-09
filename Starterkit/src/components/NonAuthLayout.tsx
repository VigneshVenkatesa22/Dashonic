import React from "react";
// import withRouter
import withRouter from "./Common/withRouter";

// redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const NonAuthLayout = ({ children }: any) => {

  const selectLeadData = createSelector(
    (state: any) => state.Layout.layoutMode,
    (leadsChart) => leadsChart
  );
  // Inside your component
  const layoutMode = useSelector(selectLeadData);

  if (layoutMode === "dark") {
    document.body.setAttribute("data-bs-theme", "light");
    document.body.removeAttribute("data-sidebar");
  } else {
    document.body.setAttribute("data-bs-theme", "light");
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(NonAuthLayout);