import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useAPIVehicleType, useVehicleDetails } from '../api/APIConnection';

export function VehicleSelector() {
  const vehicleTypes = useAPIVehicleType(); // Hook para obter os tipos de veículos
  const [selectedType, setSelectedType] = useState(null); // Estado para armazenar o tipo de veículo selecionado
  const vehicleDetails = useVehicleDetails(selectedType); // Hook para obter detalhes do veículo selecionado

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value); // Atualiza o estado quando o usuário seleciona um tipo
  };

  return (
    <Container className="mt-5">
      <Form>
        <Row className="align-items-center">
          <Col md={10}>
            <Form.Group controlId="vehicleType" className="mb-3">
              <Form.Label className="fw-bold">Escolha um Tipo de Veículo</Form.Label>
              <Form.Control as="select" onChange={handleSelectChange}>
                <option value="">Selecione um tipo</option>
                {vehicleTypes.map((type) => (
                  <option key={type.VehicleTypeId} value={type.VehicleTypeId}>{type.VehicleTypeName}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={10}>
            {vehicleDetails && (
              <div>
                <h5>Detalhes do Veículo Selecionado:</h5>
                <pre>{JSON.stringify(vehicleDetails, null, 2)}</pre>
              </div>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}