import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

const CreateSparkSnap = () => {
    return (
      <Link to="/create">
        <Button variant="contained" color="primary">Create Spark Snap</Button>
      </Link>
      
    );
  };
  
export default CreateSparkSnap;