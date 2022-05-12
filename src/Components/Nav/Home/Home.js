import React from 'react'
import img from '../../../assets/images/chair.png'
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phn from '../../../assets/icons/phone.svg'
import './nav.css'
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import espect from '../../../assets/images/treatment.png'
import doctor from '../../../assets/images/doctor.png'
import appint from '../../../assets/images/appointment.png'
import newpic from '../../../assets/images/people1.png'

const Home = () => {
  return (
    <div>
      {/* banner part.......... */}
      <section className="mb-10">
        <div className="hero min-h-screen bg-base-100 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img width="594px" height="355px" src={img} alt="img" />
            <div className="ml-5  ">
              <h1 className="text-5xl  font-bold">
                Your New Smile Starts Here
              </h1>
              <p className="py-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <button className="btn text-white text-bold border-transparent bg-gradient-to-r from-primary to-secondary">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd section................. */}
      <section className="px-14  lg:grid grid-cols-3 gap-20">
        <div class="card w-100 bg-gradient-to-r text-bold from-primary to-secondary text-white my-3 shadow-xl block items-center	 lg:flex flex-row lg:justify-center  ">
          <div className="flex justify-center pl-5">
            <img width="86px" height="86px" src={clock} alt="img" />
          </div>
          <div class="card-body">
            <h2 class="card-title">Visit our location</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        <div class="card w-100 bg-accent text-white shadow-xl block items-center lg:flex my-3 flex-row lg:justify-center  ">
          <div className="flex justify-center pl-5">
            <img width="70px" height="70px" src={location} alt="img" />
          </div>
          <div class="card-body">
            <h2 class="card-title">Contact us now</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        <div class="card w-100 bg-gradient-to-r text-bold from-primary to-secondary text-white my-3 shadow-xl block items-center	 lg:flex flex-row lg:justify-center  ">
          <div className="flex justify-center pl-5">
            <img width="86px" height="86px" src={phn} alt="img" />
          </div>
          <div class="card-body">
            <h2 class="card-title">Opening Hours</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
      </section>
      {/* our section.......... */}
      <section
        className="text-center my-24 ;
"
      >
        <h4 className="text-primary text-xl	 font-bold">OUR SERVICES</h4>
        <h1 className="text-3xl	 font-normal">Services We Provide</h1>

        <div className="block items-center my-24 px-14 py-2	 lg:grid grid-cols-3 gap-12 ">
          <div class="card w-100 bg-base-100 my-4 shadow-xl">
            <figure class="lg:px-10 pt-10">
              <img src={img1} alt="img" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Fluoride Treatment</h2>
              <p>
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>

          <div class="card w-100 bg-base-100 my-4 shadow-xl">
            <figure class="lg:px-10 pt-10">
              <img src={img2} alt="img" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Cavity Filling</h2>
              <p>
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>

          <div class="card w-100 bg-base-100 my-4 shadow-xl">
            <figure class="lg:px-10 pt-10">
              <img src={img3} alt="img" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Teeth Whitening</h2>
              <p>
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the?
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Expectonal section...... */}
      <section>
        <div class="hero min-h-screen bg-base-100">
          <div class="hero-content  flex-col lg:flex-row">
            <img
              className="rounded-lg w-4/5 lg:w-96"
              height="576px"
              src={espect}
              alt="img"
            />
            <div className="lg:m-24  w-100">
              <h1 class="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p class="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page.
              </p>
              <button className="btn text-white border-transparent bg-gradient-to-r text-bold from-primary to-secondary">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* appointment ................. */}
      <section
        style={{
          background: `url(${appint})`,
        }}
        className="my-24 py-15 flex justify-center items-center	"
      >
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-120px]" src={doctor} alt="img" />
        </div>
        <div className="flex-1 p-12 lg:p-24">
          <h1 className="text-xl text-primary font-bold">Appointment</h1>
          <br />
          <h3 className="text-4xl text-white	">Make an appointment Today</h3>
          <br />
          <p className="text-white lg:pr-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <br />

          <button className="btn text-white border-transparent bg-gradient-to-r text-bold from-primary to-secondary">
            GET STARTED
          </button>
        </div>
      </section>

      {/* tesimonial.......... */}

      <section className="px-14 py-20">
        <h1 className="text-xl text-primary font-bold">Testimonial</h1>
        <h1 className="text-4xl ">What Our Patients Says</h1>

        <div className="my-24 py-2 lg:grid grid-cols-3 gap-12">
          <div class="card w-100 bg-base-100 shadow-xl pb-4 my-4">
            <div class="card-body">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-full ring ring-primary"
                src={newpic}
                alt="img"
              />
              <div className="mx-4">
                <h1>Winson Herry</h1>

                <h2>California</h2>
              </div>
            </div>
          </div>

          <div class="card w-100 bg-base-100 shadow-xl pb-4 my-4">
            <div class="card-body">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-full ring ring-primary"
                src={newpic}
                alt="img"
              />
              <div className="mx-4">
                <h1>Winson Herry</h1>

                <h2>California</h2>
              </div>
            </div>
          </div>

          <div class="card w-100 bg-base-100 shadow-xl pb-4 my-4">
            <div class="card-body">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <img
                className="rounded-full ring ring-primary"
                src={newpic}
                alt="img"
              />
              <div className="mx-4">
                <h1>Winson Herry</h1>

                <h2>California</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* form ..........................................*/}


      <section className="text-center py-20 mt-8 " style={{
          background: `url(${appint})`,
        }} >
          <h1 className='text-xl text-primary font-bold my-4'>Contact Us</h1>
          <h1 className='text-4xl text-white my-8'>Stay connected with us</h1>
        <div className=''>
          <form >

          <input
            type="text"
            placeholder="Email Address"
            class="input input-bordered input-md w-full max-w-xs"
          />
          <br /> <br />

          <input
            type="text"
            placeholder="subject"
            class="input input-bordered input-md w-full max-w-xs"
          />  <br />
           <br />

          <textarea style={{

              height:100
            
            }} className='  w-80 rounded-lg'
            type="textarea"
            placeholder="Your Message" 
            class="input input-bordered  w-full max-w-xs"
          />
          <br /> <br />
          <input className='text-white font-bold  border-transparent bg-gradient-to-r text-bold from-primary to-secondary px-8 py-3 rounded-lg' type="submit" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
