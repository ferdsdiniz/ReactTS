import { useState } from 'react'
// import Alert, { AlertType } from './components/Alert/Alert'
// import Alert2 from './components/Alert/Alert2'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='bg-[#BDE0FE] lg'>
    //   <span className='bg-red-50 bg-blue-50 bg-green-50 '></span>
    //   hello, world!
    //   <Alert title={'Aviso'} subtitle={'Seu carro está vermelho'} type={AlertType.DANGER} />
    //   <Alert2 type={AlertType.SUCCESS}>
    //     meu bloco
    //   </Alert2>
    // </div>
    
    <div> 
<nav className="bg-[#E0B0D5] border-[#E0B0D5]-200 px-2 sm:px-4 py-2.5 rounded dark:bg-[#E0B0D5]-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/6602/6602277.png" className="h-6 mr-3 sm:h-9" alt="Teste" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Página Teste</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-[#E0B0D5]-500 rounded-lg md:hidden hover:bg-[#E0B0D5]-100 focus:outline-none focus:ring-2 focus:ring-[#E0B0D5]-200 dark:text-[#E0B0D5]-400 dark:hover:bg-[#E0B0D5]-700 dark:focus:ring-[#E0B0D5]-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-[#E0B0D5]-100 rounded-lg bg-[#E0B0D5]-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#E0B0D5] dark:bg-[#E0B0D5]-800 md:dark:bg-[#E0B0D5]-900 dark:border-[#E0B0D5]-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#E0B0D5]-700 rounded hover:bg-[#E0B0D5]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#E0B0D5]-400 md:dark:hover:text-white dark:hover:bg-[#E0B0D5]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#E0B0D5]-700 rounded hover:bg-[#E0B0D5]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#E0B0D5]-400 md:dark:hover:text-white dark:hover:bg-[#E0B0D5]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#E0B0D5]-700 rounded hover:bg-[#E0B0D5]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#E0B0D5]-400 md:dark:hover:text-white dark:hover:bg-[#E0B0D5]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#E0B0D5]-700 rounded hover:bg-[#E0B0D5]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#E0B0D5]-400 md:dark:hover:text-white dark:hover:bg-[#E0B0D5]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
<div
      style={{
        backgroundColor: '#FFE1EC',
        width: 'max',
        height: 'max'
      }}
    />
</div>
    </div>
  )
}

export default App