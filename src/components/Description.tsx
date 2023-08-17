import React from 'react'
import Image from 'next/image'
export default function Description() {
  return (
    <div className='p-4 grid gap-20 max-w-full'>
      <article className='sm:grid gap-4   lg:gap-0  sm:grid-cols-[auto_1fr] place-content-center  max-w-full'>
      <h1 className='col-span-2 m-auto text-[3rem] font-bold text-shadow-title block '>¿Qué es Forex?</h1>
      <Image
      src="/currencies-img1.jpeg"
      alt="Mercado de divisas"
      className=" rounded-md mr-4"
      width={300}
      height={60}
      />
      
    <p className=' text-2xl grid place-content-center pr-6 '>  Forex, también conocido como mercado de divisas, es la conversión de una divisa a otra.
Es uno de los mercados más activos del mundo, con particulares, empresas, bancos, bancos centrales, inversores institucionales y traders individuales que realizan transacciones diariamente.</p>

      </article>
    
<h4 className='text-3xl p-6 text-center m-auto text-shadow-decription'>El trading de Forex implica comprar o vender divisas con el objetivo de obtener ganancias a través de la fluctuación de los tipos de cambio.
</h4> 
<article className='grid place-content-center text-center gap-4'>
<Image
      src='/bank.jpg'
      alt="Bancko desentralizado"
      className="m-auto shadow-[0_1px_60px_-15px_#F8F8F8] rounded-3xl  "
      width={300}
      height={60}
      />
      <p className='text-xl'>Es un mercado descentralizado, lo que significa que no tiene una ubicación física centralizada, sino que opera a través de una red electrónica global.
</p>
</article>

<article className='inline-flex m-auto items-center gap-4'>
  <p className='max-w-sm font-semibold text-lg'>Los participantes en el mercado de Forex incluyen bancos, instituciones financieras, corporaciones multinacionales, gobiernos y traders individuales.
</p>
  <Image
   src='/participant.jpg'
   alt=" Participante"
   className="m-auto  rounded-r-3xl hidden sm:block "
   width={300}
   height={60}
  ></Image>
  <Image
   src='/participant.jpg'
   alt=" Participante"
   className="m-auto  rounded-r-3xl block sm:hidden "
   width={150}
   height={30}
  ></Image>
</article>
<div className="">
  


<article className='  grid grid-cols-2 grid-rows-2 h-[600px] max-w-5xl m-auto gap-2 bg-gray-900 p-4 rounded-md'>
<div className=" relative   grid place-content-center px-10 text-xs sm:text-lg bg-[url('https://www.ceupe.com/images/easyblog_articles/3349/liquide_20220425-214948_1.png')] bg-contain bg-no-repeat bg-center object-center cursor-pointer min-w-full min-h-full 0">
<h4 className='text-transparent hover:text-white rounded-xl hover:flex hover:bg-opacity-70 hover:backdrop-blur-sm  absolute  items-center justify-center p-1 sm:p-12 min-h-full w-full hover:bg-black  ' >El mercado de divisas es conocido por su alta liquidez, lo que significa que es fácil comprar y vender divisas sin afectar significativamente los precios.
</h4>
</div>
<div className="relative   grid place-content-center px-10 text-xs sm:text-lg  bg-[url('https://bubot.es/wp-content/uploads/2014/03/marketing-online.png')] bg-contain bg-no-repeat bg-center object-center cursor-pointer 
 min-w-full min-h-full ">
<h4 className='text-transparent hover:text-white rounded-xl hover:flex hover:bg-opacity-70 hover:backdrop-blur-sm  absolute  items-center justify-center p-1 sm:p-12 min-h-full w-full hover:bg-black'>Los factores que influyen en los movimientos de los precios de las divisas incluyen los indicadores económicos, los eventos políticos, las políticas monetarias y las expectativas del mercado.</h4>
</div>

<div className="relative   grid place-content-center px-10 text-xs sm:text-lg  bg-[url('https://invertirconcabeza.com//wp-content/uploads/2020/11/Analisis1.jpg')] bg-contain bg-no-repeat bg-center object-center cursor-
 pointer min-w-full min-h-full ">
<h4 className='text-transparent hover:text-white rounded-xl hover:flex hover:bg-opacity-70 hover:backdrop-blur-sm  absolute  items-center justify-center p-1 sm:p-12 min-h-full w-full hover:bg-black'>Los traders de Forex utilizan análisis técnico y fundamental para tomar decisiones de trading y gestionar el riesgo.
</h4 >
</div>
<div className="relative   grid place-content-center px-10 text-xs sm:text-lg  bg-[url('https://img.freepik.com/vector-premium/concepto-servicio-24-horas-al-dia-7-dias-semana-24-7-abierto-icono-neon-icono-servicio-soporte-ilustracion-stock-vectorial_100456-3505.jpg')]  bg-contain bg-no-repeat bg-center object-center cursor-pointer min-w-full min-h-full ">
<h4 className='text-transparent hover:text-white rounded-xl hover:flex hover:bg-opacity-70 hover:backdrop-blur-sm  absolute  items-center justify-center p-1 sm:p-12 min-h-full w-full hover:bg-black'>El mercado de Forex está abierto las 24 horas del día, cinco días a la semana, lo que permite a los traders operar en diferentes husos horarios.
</h4>
</div>
</article>

</div>


<article className='flex items-center max-w-2xl justify-center m-auto gap-3'>
  <Image
  src='/important.png'
  alt='importante'
  className='hidden sm:block'
  height={120}
  width={120}
  />
  <Image
  src='/important.png'
  alt='importante'
  className='block sm:hidden'
  height={60}
  width={60}
  />
  <p className=' text-base sm:text-xl text-center'>
  Es importante tener en cuenta que el trading de Forex conlleva riesgos y es recomendable adquirir conocimientos y experiencia antes de participar en este mercado.
  </p>
</article>
    </div>
  )
}
