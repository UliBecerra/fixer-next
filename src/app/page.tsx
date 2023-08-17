'use client'

import { useEffect, useState } from 'react'

import Header from '../components/Header';
import Description from '../components/Description';
import SwiperCurrencies from '../components/SwiperCurrencies'
import Footer from '../components/Footer';
import Link from 'next/link';


const objecto : Object = {


  AUD: 'Australia Dólar '
  ,
  
  GBP: 'Gran Bretaña Libra esterlina'
  ,
  
  EUR: 'Euro'
  ,
  

  
  CHF: 'Suiza Franco'
  ,
  
  USD: 'EE.UU. Dólar'
  ,
  
  AFN: 'Afganistán Afgani'
  ,
  
  ALL: 'Albania Lek'
  ,
  
  DZD: 'Algeria Dinar'
  ,
  
  AOA: 'Angola Kwanza'
  ,
  
  ARS: 'Argentina Peso'
  ,
  
  AMD: 'Armenia Dram'
  ,
  
  AWG: 'Aruba Florín'
  ,
  

  
  ATS: '(EURO) Austria Chelín'
  ,
  
  BEF: '(EURO) Bélgica Franco'
  ,
  
  AZN: 'Azerbaiyán Nuevo Manat'
  ,
  
  BSD: 'Bahamas Dólar'
  ,
  
  BHD: 'Bahréin Dinar'
  ,
  
  BDT: 'Bangladesh Taka'
  ,
  
  BBD: 'Barbados Dólar'
  ,
  
  BYR: 'Bielorrusia Rublo'
  ,
  
  BZD: 'Belice Dólar'
  ,
  
  BMD: 'Bermuda Dólar'
  ,
  
  BTN: 'Bután Ngultrum'
  ,
  
  BOB: 'Bolivia Boliviano'
  ,
  
  BAM: 'Bosnia Marco'
  ,
  
  BWP: 'Botsuana Pula'
  ,
  
  BRL: 'Brasil Real'
  ,
  
  
  BND: 'Brunéi Dólar'
  ,
  
  BGN: 'Bulgaria Lev'
  ,
  
  BIF: 'Burundi Franco'
  ,
  
  XOF: 'CFA Franco BCEAO'
  ,
  
  XAF: 'CFA Franco BEAC'
  ,
  
  XPF: 'CFP Franco'
  ,
  
  KHR: 'Camboya Riel'
  ,
  
  CAD: 'Canadá Dólar'
  ,
  
  CVE: 'Cabo Verde Escudo'
  ,
  
  KYD: 'Islas Caimán Dólar'
  ,
  
  CLP: 'Chile Peso'
  ,
  
  CNY: 'China Yuan/Renminbi'
  ,
  
  COP: 'Colombia Peso'
  ,
  
  KMF: 'Comoras Franco'
  ,
  
  CDF: 'Congo Franco'
  ,
  
  CRC: 'Costa Rica Colón'
  ,
  
  HRK: 'Croacia Kuna'
  ,
  
  CUC: 'Cuba Peso convertible'
  ,
  
  CUP: 'Cuba Peso'
  ,
  
  CYP: '(EURO) Chipre Libra'
  
  ,
  
  CZK: 'República Checa Corona'
  ,
  
  DKK: 'Dinamarca Corona'
  ,
  
  DJF: 'Yibuti Franco'
  ,
  
  DOP: 'República Dominicana Peso'
  ,
  
  XCD: 'Caribe oriental Dólar'
  ,
  
  EGP: 'Egipto Libra'
  ,
  
  SVC: 'El Salvador Colón'
  ,
  
  EEK: '(EURO) Estonia Corona'
  
  ,
  
  ETB: 'Etiopía Birr'
  ,
  
  

  
  FKP: 'Islas Falkland Libra'
  ,
  
  FIM: '(EURO) Finlandia Marco'
  
  ,
  
  FJD: 'Fiji Dólar'
  ,
  
  GMD: 'Gambia Dalasi'
  ,
  
  GEL: 'Georgia Lari'
  ,
  
  DMK: '(EURO) Alemania Marco'
  
  ,
  
  GHS: 'Ghana Nuevo Cedi'
  ,
  
  GIP: 'Gibraltar Libra'
  ,
  
  GRD: '(EURO) Grecia Dracma'
  
  ,
  
  GTQ: 'Guatemala Quetzal'
  ,
  
  GNF: 'Guinea Franco'
  ,
  
  GYD: 'Guyana Dólar'
  ,
  
  HTG: 'Haití Gourde'
  ,
  
  HNL: 'Honduras Lempira'
  ,
  
  HKD: 'Hong Kong Dólar'
  ,
  
  HUF: 'Hungría Forinto'
  ,
  
  ISK: 'Islandia Corona'
  ,
  
  INR: 'India Rupia'
  ,
  
  IDR: 'Indonesia Rupia'
  ,
  
  IRR: 'Irán Rial'
  ,
  
  IQD: 'Irak Dinar'
  ,
  
  IED: '(EURO) Irlanda Libra'
  
  ,
  
  ILS: 'Israel Nuevo Séquel'
  ,
  
  ITL: '(EURO) Italia Lira'
  
  ,
  
  JMD: 'Jamaica Dólar'
  ,
  
  JPY: 'Japón Yen'
  ,
  
  JOD: 'Jordania Dinar'
  ,
  
  KZT: 'Kazajistán Tenge'
  ,
  
  KES: 'Kenia Chelín'
  ,
  
  KWD: 'Kuwait Dinar'
  ,
  
  KGS: 'Kirguistán Som'
  ,
  
  LAK: 'Laos Kip'
  ,
  
  LVL: '(EURO) Letonia Lats'
  
  ,
  
  LBP: 'Líbano Libra'
  ,
  
  LSL: 'Lesotho Loti'
  ,
  
  LRD: 'Liberia Dólar'
  ,
  
  LYD: 'Libia Dinar'
  ,
  
  LTL: '(EURO) Lituania Litas'
  
  ,
  
  LUF: '(EURO) Luxemburgo Franco'
  
  ,
  
  MOP: 'Macao Pataca'
  ,
  
  MKD: 'Macedonia Denar'
  ,
  
  MGA: 'Madagascar Ariary'
  ,
  
  MWK: 'Malawi Kwacha'
  ,
  
  MYR: 'Malasia Ringgit'
  ,
  
  MVR: 'Maldivas Rufiyaa'
  ,
  
  MTL: '(EURO) Malta Lira'
  
  ,
  
  MRO: 'Mauritania Ouguiya'
  ,
  
  MUR: 'Mauricio Rupia'
  ,
  
  MXN: 'México Peso'
  ,
  
  MDL: 'Moldavia Leu'
  ,
  
  MNT: 'Mongolia Tugrik'
  ,
  
  MAD: 'Marruecos Dirham'
  ,
  
  MZN: 'Mozambique Nuevo Metical'
  ,
  
  MMK: 'Myanmar Kyat'
  ,
  
  ANG: 'Antillas Holandesas Florín'
  ,
  
  NAD: 'Namibia Dólar'
  ,
  
  NPR: 'Nepal Rupia'
  ,
  
  NLG: '(EURO) Países bajos Florín'
  
  ,
  
  NZD: 'Nueva Zelanda Dólar'
  ,
  
  NIO: 'Nicaragua Córdoba'
  ,
  
  NGN: 'Nigeria Naira'
  ,
  
  KPW: 'Corea del Norte Won'
  ,
  
  NOK: 'Noruega Corona'
  ,
  
  OMR: 'Omán Rial'
  ,
  
  PKR: 'Pakistán Rupia'
  ,
  
  PAB: 'Panamá Balboa'
  ,
  
  PGK: 'Papúa Nueva Guinea Kina'
  ,
  
  PYG: 'Paraguay Guaraní'
  ,
  
  PEN: 'Perú Nuevo Sol'
  ,
  
  PHP: 'Filipinas Peso'
  ,
  
  PLN: 'Polonia Zloty'
  ,
  
  PTE: '(EURO) Portugal Escudo'
  
  ,
  
  QAR: 'Catar Rial'
  ,
  
  RON: 'Rumania Nuevo Lei'
  ,
  
  RUB: 'Rusia Rublo'
  ,
  
  RWF: 'Ruanda Franco'
  ,
  
  WST: 'Samoa Tala'
  ,
  
  STD: 'Santo Tomé y Príncipe Dobra'
  ,
  
  SAR: 'Arabia Saudita Rial'
  ,
  
  RSD: 'Serbia Dinar'
  ,
  
  SCR: 'Seychelles Rupia'
  ,
  
  SLL: 'Sierra Leona Leone'
  ,
  
  SGD: 'Singapur Dólar'
  ,
  
  SKK: '(EURO) Eslovaquia Koruna'
  
  ,
  
  SIT:  '(EURO) Eslovenia Tolar'
  ,
  
  SBD: 'Islas Salomón Dólar'
  ,
  
  SOS: 'Somalía Chelín'
  ,
  
  ZAR: 'Sudáfrica Rand'
  ,
  
  KRW: 'Corea del Sur Won'
  ,
  
  ESP: '(EURO) España Peseta'
  ,
  
  LKR: 'Sri Lanka Rupia'
  ,
  
  SHP: 'Santa Helena Libra'
  ,
  
  SDG: 'Sudán Libra'
  ,
  
  SRD: 'Suriname Dólar'
  ,
  
  SZL: 'Suazilandia Lilangeni'
  ,
  
  SEK: 'Suecia Corona'
  ,
  
 

  
  SYP: 'Siria Libra'
  ,
  
  TWD: 'Taiwán Dólar'
  ,
  
  TZS: 'Tanzania Chelín'
  ,
  
  THB: 'Tailandia Baht'
  ,
  
  TOP: `Tonga Pa'anga`
  ,
  
  TTD: 'Trinidad y Tobago Dólar'
  ,
  
  TND: 'Túnez Dinar'
  ,
  
  TRY: 'Turquía Nueva Lira'
  ,
  
  TMM: 'Turkmenistán Manat'
  ,
  

  
  UGX: 'Uganda Chelín'
  ,
  
  UAH: 'Ucrania Hryvnia'
  ,
  
  UYU: 'Uruguay Peso'
  ,
  
  AED: 'Emiratos Árabes Unidos Dirham'
  ,
  
  VUV: 'Vanuatu Vatu'
  ,
  
  VEB: 'Venezuela Bolívar'
  
  ,
  
  
  VND: 'Vietnam Dong'
  ,
  
  YER: 'Yemen Rial'
  ,
  
  ZMK: 'Zambia Kwacha'
  
  ,
  
  ZWD: 'Zimbabue Dólar'
  
  }
export default function Home() {
  
  

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-0 overflow-hidden pt-20 sm:pt-36 ">
      <Header />
      <SwiperCurrencies />

      <Description />
      <div className=" flex gap-1">
        <Link href='/Currencies'>
      <h1>Ingrear a <span className='text-shadow-decription'>Mercado</span> y ver:</h1>
      </Link>
      <h2> Divisas </h2>
      <h3>Tarifas y monedas</h3>
      </div>
      {/* <ul className='grid   capitalize max-w-[1150px] px-2 gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(130px,_1fr))] first-letter: place-content-center m-auto'>
        {
           Object.entries(currencies).map((entrie, i) => (
            <article key={i} className='grid place-content-center text-center'  > 
            <h3 className='font-bold'>{entrie[0]}</h3> 
            <h4>{abbreviations[entrie[0]]}</h4>
            <p>{entrie[1]}</p>
            
         </article>
          )) 
         
        }
        {
       
        }
      </ul> */}
  <Footer/>
    </main>
  )
}


/* 

<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
*/