import React from "react";
import Contact from "./Contact";


function Home() {
  return (
    <div>
      <div className="col-lg-12 align-middle">
        <h1 className="text-center" style={{ color: "Black", marginTop: "40px" }}>
          EQUIPMENT RENTAL APPLICATION
        </h1>
        <h4 className="text-center">
          <b>You can Experience the new world by low cost</b>
        </h4>
        <h6 className="text-center">
          <h3>Rental Products we provide</h3>
          <br />
         <h2>Saw,Hammer,Corkscrew,PipeWrench,Coldlessdrill,pliers....</h2> 
        </h6>
      </div>
      <div className="col-lg-12 text-center mt-5">
        <img className="equip" src="https://whatistheurl.com/wp-content/uploads/2019/12/Tools-Equipments-and-Instruments-Vocabulary-709x1024.png" alt="equip"/>       
      </div>
      <div className="col-lg-12" style={{ marginTop: "50px" , marginBottom:"50px" }}>
        <Contact />
      </div>
    </div>
  );
}
//"https://media.istockphoto.com/id/1219144053/photo/heavy-varied-rental-machinery-for-construction-essential-and-necessary.jpg?s=612x612&w=0&k=20&c=g_vywUds-40naGxZKr9xUqBGIRpMEuWjuq3NVK8qxvo=" alt="equip"
export default Home;