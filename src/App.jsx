import { useLoanCalculatorContext } from './hooks/useLoanCalculatorContext'

import { Header, Hero } from './containers/exportContainers';



function App() {

  const { LoanCalculatorContextProvider, LoanCalculatorContext } = useLoanCalculatorContext();

  return (
    <div className="App">

      <Header />

      <LoanCalculatorContextProvider>
        <Hero />
      </LoanCalculatorContextProvider>

    </div>
  )
}

export default App
