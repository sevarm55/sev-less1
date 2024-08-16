import './App.css'
import { useState } from 'react'

export default function App() {
	const [count, setCount] = useState(1)
	const [people, setPeople] = useState([
		{ id: 101, name: 'Tiko', surname: 'Harutyunyan', salary: 200000 },
		{ id: 102, name: 'Ano', surname: 'Davtyan', salary: 350000 },
		{ id: 103, name: 'Gago', surname: 'Tigranyan', salary: 102000 },
		{ id: 104, name: 'Maro', surname: 'Melqonyan', salary: 120000 },
		{ id: 105, name: 'Saro', surname: 'Harutyunyan', salary: 75000 },
		{ id: 106, name: 'Varo', surname: 'Mnacakanyan', salary: 820000 },
	])

	const handlerSalaryUp = (id) => {
    let temp = [...people]
    let index = temp.findIndex(x => x.id === id)
    temp[index].salary += 10000
    setPeople(temp)
  }

  const handlerSalaryDown = (id) => {
    let temp = [...people]
    let index = temp.findIndex(x => x.id === id)
    temp[index].salary -= 50000

    if(temp[index].salary <= 50000) {
      temp[index].salary = 50000
    }
    
    setPeople(temp)
  }

  const handlerRemove = (id) => {
    let filter = people.filter(item => item.id !== id)
    setPeople(filter)
  }

	return (
		<>
			<h1>Barev {count}</h1>
			<button onClick={() => setCount(count + 1)}>level up</button>
			{people.map((item) => (
				<div key={item.id}>
					<p>
						{item.name}
						{item.surname}
					</p>
					<strong>{item.salary} AMD</strong>
					<button onClick={() => handlerSalaryUp(item.id)}>Salary up</button> {" "}
          <button onClick={() => handlerSalaryDown(item.id)}>Salary down</button>
          <button onClick={() => handlerRemove(item.id)}>Remove</button>
				</div>
			))}
		</>
	)
}
