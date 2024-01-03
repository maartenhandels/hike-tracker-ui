import React from "react";

import classes from "./MyHikes.module.css";

import Page from "../../containers/Page/Page";
import MyHikeRow from "../../components/MyHike/MyHikeRow/MyHikeRow";

const MyHikes = () => {
  return (
      <Page>
        <div className={classes.MyHikes}>
          <h1 className={classes.Title}>Mis Excursiones</h1>
          <div className={classes.Rows}>
            <MyHikeRow/>
            <MyHikeRow/>
            <MyHikeRow/>
            <MyHikeRow/>
            <MyHikeRow/>
          </div>
        </div>
      </Page>
  );
};

export default MyHikes;
