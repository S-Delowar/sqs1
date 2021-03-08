import React from 'react';
import './OurClients.css';
import client1 from '../../../Images/clients/client-1.png';
import client2 from '../../../Images/clients/client-2.png';
import client3 from '../../../Images/clients/client-3.png';
import client4 from '../../../Images/clients/client-4.png';
import client5 from '../../../Images/clients/client-5.png';
import client6 from '../../../Images/clients/client-6.png';



const OurClients = () => {
    return (
        <div>
           <section id="clients" class="wow fadeInUp">
      <div class="container">
        <div class="section-header">
          <h2>Clients</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
        </div>

        <div class="owl-carousel clients-carousel">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
        </div>

      </div>
    </section>
 
        </div>
    );
};

export default OurClients;