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
<nav className="bg-[#FFB3C1] border-[#FFB3C1]-200 px-2 sm:px-4 py-2.5 dark:bg-[#FFB3C1]-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/6602/6602277.png" className="h-6 mr-3 sm:h-9" alt="Teste" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Página Teste</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-[#FFB3C1]-500 rounded-lg md:hidden hover:bg-[#FFB3C1]-100 focus:outline-none focus:ring-2 focus:ring-[#FFB3C1]-200 dark:text-[#FFB3C1]-400 dark:hover:bg-[#FFB3C1]-700 dark:focus:ring-[#FFB3C1]-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Teste</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-[#FFB3C1]-100 rounded-lg bg-[#FFB3C1]-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#FFB3C1] dark:bg-[#FFB3C1]-800 md:dark:bg-[#FFB3C1]-900 dark:border-[#FFB3C1]-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#FFB3C1]-700 rounded hover:bg-[#FFB3C1]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#FFB3C1]-400 md:dark:hover:text-white dark:hover:bg-[#FFB3C1]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#FFB3C1]-700 rounded hover:bg-[#FFB3C1]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#FFB3C1]-400 md:dark:hover:text-white dark:hover:bg-[#FFB3C1]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#FFB3C1]-700 rounded hover:bg-[#FFB3C1]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#FFB3C1]-400 md:dark:hover:text-white dark:hover:bg-[#FFB3C1]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-[#FFB3C1]-700 rounded hover:bg-[#FFB3C1]-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#FFB3C1]-400 md:dark:hover:text-white dark:hover:bg-[#FFB3C1]-700 dark:hover:text-white md:dark:hover:bg-transparent">Teste</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
<div
      style={{
        backgroundColor: 'MistyRose',
        width: '1544px',
        height: '720px'
      }}
    />
</div>
<div>
  
<footer className="p-4 bg-[#FB6F92] lg shadow md:px-6 md:py-8 dark:bg-[#FB6F92]-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Teste</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-[#FB6F92]-500 sm:mb-0 dark:text-[#FB6F92]-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Teste</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Teste</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Teste</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Teste</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-[#FB6F92]-200 sm:mx-auto dark:border-[#FB6F92]-700 lg:my-8" />
    <span className="block text-sm text-[#FB6F92]-500 sm:text-center white:text-[#FB6F92]-400">©<a href="https://flowbite.com/" className="hover:underline">Teste</a>. Todos os direitos reservados.
    </span>
</footer>

</div>

    </div>
  )
}

export default App