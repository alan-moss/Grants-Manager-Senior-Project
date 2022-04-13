import { useState } from 'react';
import Axios from 'axios'; //when adding something to the database
// import './styles.css';
import 'semantic-ui-css/semantic.min.css';
// import {Button} from 'semantic-ui-react';

function App() {
  const [list, setList] = useState([]);
  const getProposals = () => {
    Axios.get('http://localhost:3001/proposals').then((response) => {
      setList(response.data); //becasue response contains 'data'
    });
  };

  return (
    <div>
      Hi
      <input type='text'></input>
      <button>Yo what up</button>
      <hr />
      <div>
        <button onClick={getProposals}>Show Everyone</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Proposal Number</th>
                <th>Agency</th>
                <th>Funding Type</th>
                <th>CFDA Number</th>
                <th>Investigator</th>
              </tr>
            </thead>
            <tbody>
              {list.map((proposal, key) => {
                return (
                  <tr>
                    <td>{proposal.proposal_number}</td>
                    <td>{proposal.title}</td>
                    <td>{proposal.agency}</td>
                    <td>{proposal.funding_type}</td>
                    <td>{proposal.cfda_number}</td>
                    <td>{proposal.investigator}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
