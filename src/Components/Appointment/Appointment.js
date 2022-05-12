import React, { useEffect, useState } from 'react';
import img from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import CardAvail from './CardAvail';
import Modal from '../../Modal/Modal';

const Appointment = () => {
    const [date,setdate]=useState(new Date());
    const [Availables,setavailables]=useState([]);

    const [treatment,setTreatment] = useState(null);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setavailables(data))




    },[]);
    
    
  
    return (
        <div>
             <section className="mb-10">
        <div className="hero my-24  bg-base-100 ">
          <div className="hero-content flex-col items-center  lg:flex-row-reverse justify-between ">
              <div className='flex-1'>
            <img className='' width="100%" height="355px" src={img} alt="img" />
            </div>
            <div className='flex-1 text-lg	w-100  '>
            <DayPicker
            className='w-100'
            mode="single"
            selected={date}
            onSelect={setdate}
            
            />
            </div>
          </div>
        </div>
      </section>
      {/* available..................... */}
      <section>
          <h1 className='text-center text-2xl text-primary font-bold'>Available Appointments on  {format(date, 'PP')}</h1>
          <div className='grid gap-8 lg:grid-cols-3 px-14 my-24'>
              {
                  Availables.map(available=><CardAvail
                     key={available._id}
                      data={available}
                      setTreatment={setTreatment}

                       ></CardAvail>)
              }

          </div>

        {/* modal............ */}
              {treatment &&
                  <Modal newdata={treatment} setTreatment={setTreatment}  time={date}></Modal>

              }


          


      </section>
            
        </div>
    );
};

export default Appointment;