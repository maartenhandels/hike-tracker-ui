import React from "react";

import classes from "./MyHikeRow.module.css"

import Card from "../../Card/Card";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const MyHikeRow = () => {
  return (
      <div className={classes.MyHikeRow}>
        <Card customStyle={classes.CardRow}>
          <div className={classes.CardContent}>
            <div className={classes.Column}>column1</div>
            <div className={classes.Column}>column2</div>
            <div className={classes.Column}>column3</div>
            <div className={classes.Column}>
              <Link to={`/details/1`} className={classes.DetailsIcon}>
                <FontAwesomeIcon icon={faArrowRight} className={classes.Icon}/>
              </Link>
            </div>
          </div>
        </Card>
      </div>
  );
}

export default MyHikeRow;
