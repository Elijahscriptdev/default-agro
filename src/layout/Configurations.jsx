import React from "react";
import Button from "../components/common/Button";

const { notify } = require("../utils/toastNotification");

function Configurations() {

  const handler = () => {
    notify('Hello, world!');
  }

  return (
    <section style={{paddingLeft: '4rem'}}>
      <div className="col-md-12">
        <h1>Configurations</h1>
        <Button onClick={handler} value="sfssdf" disableElevation/>
      </div>
    </section>
  );
}

export default Configurations;