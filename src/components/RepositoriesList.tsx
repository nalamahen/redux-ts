import {useState} from 'react';
import { useTypedSelector} from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
 const [term, setTerm] = useState('')
 const {searchRepostiories} = useActions();
 const {data, error, loading} = useTypedSelector((state) => state.repositories);

 const handleSubmit = ((event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();

  searchRepostiories(term);
})
 return <div>
  <form onSubmit={handleSubmit}>
  <input onChange={e => setTerm(e.target.value)} />
  <button>Search</button>
</form>
{error && <h3>{error}</h3>}
{loading && <h3>Loading...</h3>}
{!error && !loading && data.map(name => <div key={name}>{name}</div>)}
</div>
}

export default RepositoriesList;