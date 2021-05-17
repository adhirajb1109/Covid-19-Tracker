import React from "react";
function Data() {
  window.addEventListener("load", () => {
    fetch(`https://api.covid19api.com/summary`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let totalcasesglobal = data.Global.TotalConfirmed;
        let totalrecoveredglobal = data.Global.TotalRecovered;
        let totalactiveglobal = totalcasesglobal - totalrecoveredglobal;
        let totaldeathsglobal = data.Global.TotalDeaths;
        let lastupdateglobalnf1 = data.Global.Date.replace("T", " ");
        let lastupdateglobal = lastupdateglobalnf1.replace("Z", " ");
        document.getElementById("totalcasesglobal").innerHTML =
          "Total Cases : " + totalcasesglobal;
        document.getElementById("totalrecoveredglobal").innerHTML =
          "Total Recovered : " + totalrecoveredglobal;
        document.getElementById("totalactiveglobal").innerHTML =
          "Total Active Cases : " + totalactiveglobal;
        document.getElementById("totaldeathsglobal").innerHTML =
          "Total Deaths : " + totaldeathsglobal;
        document.getElementById("lastupdateglobal").innerHTML =
          "Last Updated Time : " + lastupdateglobal;
      });
    fetch(`https://api.covid19india.org/data.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let totalcases = data.statewise[0].confirmed;
        let totalrecovered = data.statewise[0].recovered;
        let totalactive = data.statewise[0].active;
        let totaldeaths = data.statewise[0].deaths;
        let lastupdate = data.statewise[0].lastupdatedtime;
        document.getElementById("totalcases").innerHTML =
          "Total Cases : " + totalcases;
        document.getElementById("totalrecovered").innerHTML =
          "Total Recovered : " + totalrecovered;
        document.getElementById("totalactive").innerHTML =
          "Active Cases : " + totalactive;
        document.getElementById("totaldeaths").innerHTML =
          "Total Deaths : " + totaldeaths;
        document.getElementById("lastupdate").innerHTML =
          "Last Updated Time : " + lastupdate;
      });
  });
  return (
    <div className="my-4 container text-center">
      <div class="card text-center mx-auto">
        <div class="card-body">
          <h4 class="card-title">Global Covid 19 Statistics 🌎</h4>
          <h5 class="card-title" id="totalcasesglobal">
            {}
          </h5>
          <h5 class="card-title" id="totalrecoveredglobal">
            {}
          </h5>
          <h5 class="card-title" id="totalactiveglobal">
            {}
          </h5>
          <h5 class="card-title" id="totaldeathsglobal">
            {}
          </h5>
          <h5 class="card-title" id="lastupdateglobal">
            {}
          </h5>
        </div>
      </div>
      <br />
      <br />
      <div class="card text-center mx-auto">
        <div class="card-body">
          <h4 class="card-title">India Covid 19 Statistics <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/275/flag-india_1f1ee-1f1f3.png" alt="India" style={{height:"30px"}}></img></h4>
          <h5 class="card-title" id="totalcases">
            {}
          </h5>
          <h5 class="card-title" id="totalrecovered">
            {}
          </h5>
          <h5 class="card-title" id="totalactive">
            {}
          </h5>
          <h5 class="card-title" id="totaldeaths">
            {}
          </h5>
          <h5 class="card-title" id="lastupdate">
            {}
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Data;
