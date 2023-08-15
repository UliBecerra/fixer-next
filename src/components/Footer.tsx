import React from 'react'
import {FaLinkedinIn, FaYoutube, FaFacebookF, FaGithub, FaTelegram} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'
function Footer() {
    return (
    <footer className='pt-24 grid gap-6'>
      <h1 className='font-bold text-center pb-18 text-shadow-title'>Todos los datos de las divisas tienen como base el Euro</h1>

      <div className="contact grid justify-center gap-4">
        <h1 className='text-center'>Contactar al desarrollador</h1>
        <div className=' flex  justify-around md:justify-center md:gap-10 mx-12 pb-5 md:border-none border-b-2 border-white z-20 '>
        <a href="https://www.linkedin.com/in/aldo-ulises-becerra-casanova-03b99926b/">
        <ul className="w-[40px] h-[40px] text-[25px] bg-[#0077B5] rounded-full grid place-content-center text-white z-30"><FaLinkedinIn className=''/></ul>
        </a>
        <a href="https://github.com/UliBecerra">
        <ul className="w-[40px] h-[40px] text-[32px] bg-[#ffffff] rounded-full grid place-content-center text-black z-30"><FaGithub className=''/></ul>
        </a>
  
        <a href="https://uli-beca-portfolio.netlify.app/">
          <ul className='w-[40px] h-[40px] text-[40px]  rounded-full grid place-content-center text-[#0088cc] z-30' > <SiNetlify className='' /></ul>
        </a>

      </div>
      </div>
      <p className='font-medium text-slate-600'> Copiright © Todos los derechos no estan reservados</p>

    </footer>
  )
}

export default Footer