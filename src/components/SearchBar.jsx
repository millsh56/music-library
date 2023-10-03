import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar () {
    
    const {term, handleSearch} = useContext(SearchContext)

    return (
      <form onSubmit = {(e) => handleSearch(e, term.current.value)}>

        <input ref = {term} type="text" placeholder="Enter a search term here" 
        onChange={(e) => handleSearch(e, term.current.value)}/>
              <input type="submit" />
      </form>
    //   <form>
    //   <input ref={term} type="text" placeholder="Enter a search term here" />
    //   <button onClick={(e) => handleSearch(e, term)}>Submit</button>
    // </form>
  )
  }

  export default SearchBar


