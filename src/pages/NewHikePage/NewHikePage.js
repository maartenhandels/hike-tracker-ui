import React from "react";
import Page from "../../containers/Page/Page";

import classes from "./NewHikePage.module.css"

import NewHikeForm from "../../components/NewHikeForm/NewHikeForm";

const NewHikePage = () => {
  return (
      <Page>
          <div className={classes.Content}>
              <NewHikeForm />
          </div>
      </Page>
  );
}

export default NewHikePage;