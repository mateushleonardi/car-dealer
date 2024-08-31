
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useAPIVehicleType, useAPIVehicleYear } from '../api/APIConnection';

export function Home() {
  const vehicleTypes = useAPIVehicleType();
  const vehicleYears = useAPIVehicleYear();

  const [selectedYear, setSelectedYear] = useState(""); 

  const handleSelectChange = (event) => {
    console.log('Selecionado:', event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    console.log('Ano selecionado:', event.target.value);
  };

  const handleSearch = () => {
    console.log('Botão de busca clicado');
  };

  const handleDecline = () => {
    console.log('Botão de recusa clicado');
  };

  const filterVehiclesByYear = (year) => {
    return vehicleYears.filter((vehicle) => vehicle.Year === year);
  };

  return (
    <Container className="mt-5">
      <Form>
        <Row className="align-items-center">
          <Col md={10}>
            <Form.Group controlId="vehicleType" className="mb-3">
              <Form.Label className="fw-bold">Choose a Vehicle Type</Form.Label>
              <Form.Control as="select" onChange={handleSelectChange}>
                {vehicleTypes.map((type) => (
                  <option key={type.MakeId} value={type.MakeId}>
                    {type.MakeName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={10}>
            <Form.Group controlId="vehicleYear" className="mb-3">
              <Form.Label className="fw-bold">Choose a Vehicle Year</Form.Label>
              <Form.Control as="select" onChange={handleYearChange} defaultValue="">
                <option value="" disabled>
                  Year
                </option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={10}>
            {selectedYear && (
              <Form.Group controlId="filteredVehicles" className="mb-3">
                <Form.Label className="fw-bold">Filtered Vehicles for {selectedYear}</Form.Label>
                <Form.Control as="select">
                  {filterVehiclesByYear(selectedYear).map((vehicle) => (
                    <option key={vehicle.MakeId} value={vehicle.MakeId}>
                      {vehicle.MakeName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
          </Col>
          <Col md={10} className="mt-2 d-flex justify-content-end">
            <Button variant="primary" className="me-2" onClick={handleSearch}>
              Search
            </Button>
            <Button variant="danger" onClick={handleDecline}>
              Decline
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
