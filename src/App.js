import { BiCalendar } from "react-icons/bi"
import Search from './components/Search'
import AddApointment from './components/AddApointment'

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments
      </h1>
      <AddApointment />
      <Search />
    </div>
  )
}

export default App;