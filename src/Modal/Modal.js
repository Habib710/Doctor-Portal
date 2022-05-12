import React from 'react'
import { format } from 'date-fns'

const Modal = ({ newdata, time ,setTreatment }) => {

    const handeleclick=event=>{
        event.preventDefault()

        
        const time=event.target.time.value;
        setTreatment(null);

    }


  return (
    <div className="text-center ">
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle ">
        <div class="modal-box w-100">
          <h3 class="font-bold text-lg py-6">Booking For :{newdata.name}</h3>
          <div className=" ">
            <form onSubmit={handeleclick} className="grid grid-cols-1 gap-y-4  ">
              <input
              name='date'
                type="text"
                disabled
                value={format(time, 'PP')}
                className="input input-bordered  w-100"
              />
              <select name='time' class="select select-bordered w-full ">
                {
                    newdata.slots.map(slot=><option value={slot}>{slot}</option>)
                }
               
              </select>
              <input
              name='name'
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full "
              />
              <input
              name='number'
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full "
              />
              <input
              name='email'
                type="text"
                placeholder="Email"
                className="input input-bordered w-full "
              />
              <input
             
                type="submit"
               value='submit'
                className="btn  w-full "
              />
             
            </form>
          </div>
          <div class="modal-action">
            <label
              for="my-modal-6"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
