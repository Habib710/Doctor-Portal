import React from 'react'

const CardAvail = ({ data,setTreatment }) => {
  const { name, slots } = data;
  
 
  return (
    <div className="">

      <div class="card w-100 text-center bg-base-100 shadow-xl lg:h-60">
        <div class="card-body">
          <h2 class="text-2xl text-center text-primary">{name}</h2>
          <p>{
              slots.length>0? <span>{slots[0]} (ChangeAble)</span>:
              <p className='text-red-500'>Try Another Date</p>
              
              
              }</p>
          <p>{slots.length} Spaces Available</p>
          <div class="card-actions justify-center">
           
             <label  onClick={ ()=>setTreatment(data) }
             disabled={slots.length===0} for="my-modal-6" class="btn modal-button  btn  text-white bg-gradient-to-r from-primary to-secondary border-transparent">Book Appointment</label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardAvail
