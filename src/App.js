import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import data from './mock-data.json'
function App() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  const doSearch = () => {
    const hasil = data.filter((x) => {
      return x.fullName === search
    })
    setContacts(hasil)
  }

  return (
    <div className="App">
      <Form.Control
        onKeyUp={(e) => setSearch(e.target.value)}
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Button onClick={doSearch}>Search</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td>{c.fullName}</td>
              <td>{c.address}</td>
              <td>{c.phoneNumber}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
