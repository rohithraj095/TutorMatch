

const filterList = ['all', 'MA', 'CS', 'EE', 'STAT', 'ECON', 'COM']

export default function Filter({currentFilter, changeFilter}) {
//   const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    changeFilter(newFilter)
  }
  console.log(currentFilter)

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by: </p>
        {filterList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
          >{f}</button>
        ))}
      </nav>
    </div>
  )
}