import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';
import '../styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    continent: '',
    country: '',
    state: '',
    city: '',
  });
  const [dropdownData, setDropdownData] = useState({
    continents: [],
    countries: [],
    states: [],
    cities: [],
  });
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users', { params: filters });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchFilters = async () => {
    try {
      const response = await axios.get('/users/filters');
      setDropdownData(response.data);
    } catch (error) {
      console.error('Error fetching filters:', error);
    }
  };

  const handleFilterChange = async (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);

    try {
      const response = await axios.get('/users', { params: newFilters });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching filtered users:', error);
    }
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    if (!isPanelOpen) {
      fetchFilters();
    }
  };

  return (
    <Container fluid className="position-relative">
      <Button
        variant="primary"
        onClick={togglePanel}
        className="filter-toggle-btn"
        style={{ position: 'fixed', right: isPanelOpen ? '300px' : '0', zIndex: 1000 }}
      >
        {isPanelOpen ? '>' : '<'}
      </Button>

      <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`} style={{ marginRight: isPanelOpen ? '300px' : '0' }}>
        <h1 className="text-center my-4">User Dashboard</h1>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Continent</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.continent}</td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>

      <div
        className={`filter-panel ${isPanelOpen ? 'panel-open' : ''}`}
        style={{
          position: 'fixed',
          right: isPanelOpen ? '0' : '-300px',
          top: 0,
          width: '300px',
          height: '100vh',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
          transition: 'right 0.3s ease',
          overflowY: 'auto',
        }}
      >
        <h2>Filters</h2>
        <Form>
          <Form.Group className="mb-3" controlId="filterContinent">
            <Form.Label>Continent</Form.Label>
            <Form.Control
              as="select"
              name="continent"
              onChange={handleFilterChange}
              value={filters.continent}
            >
              <option value="">All Continents</option>
              {dropdownData.continents.map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="filterCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              as="select"
              name="country"
              onChange={handleFilterChange}
              value={filters.country}
            >
              <option value="">All Countries</option>
              {dropdownData.countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="filterState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              name="state"
              onChange={handleFilterChange}
              value={filters.state}
            >
              <option value="">All States</option>
              {dropdownData.states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="filterCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              as="select"
              name="city"
              onChange={handleFilterChange}
              value={filters.city}
            >
              <option value="">All Cities</option>
              {dropdownData.cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default App;