import React from "react";
import Page from "../../containers/Page/Page";

import classes from "./NewHikePage.module.css"

import NewHikeForm from "../../components/NewHikeForm/NewHikeForm";
import Card from "../../components/Card/Card";

const NewHikePage = () => {
  return (
      <Page>
          <Card customStyle={classes.CardContainer}>
              <div className={classes.Content}>
                  <NewHikeForm />
              </div>
          </Card>

      </Page>
  );
}

export default NewHikePage;
