import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function TesztKerdes(props) {
  function kivalaszt(event, kivalasztott) {
    console.log(event.currentTarget, kivalasztott);
  }

  return (
    <>
      <Card>
        <Card.Header className="bg-dark text-light border rounded p-2">
          {props.obj.kerdes}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col
              className="border rounded bg-light text-center"
              valasz={props.obj.v1}
              onClick={(event) => kivalaszt(event, props.obj.v1)}
            >
              <span className="valasz">{props.obj.v1}</span>
              <span className="visszajelzes-ikon"></span>
            </Col>
            <Col
              className="border rounded bg-light text-center "
              onClick={(event) => kivalaszt(event, props.obj.v2)}
            >
              <span className="valasz">{props.obj.v2}</span>
              <span className="visszajelzes-ikon"></span>
            </Col>
          </Row>
          <Row>
            <Col
              className="border rounded bg-light text-center"
              onClick={(event) => kivalaszt(event, props.obj.v3)}
            >
              <span className="valasz">{props.obj.v3}</span>
              <span className="visszajelzes-ikon"></span>
            </Col>
            <Col
              className="border rounded bg-light text-center"
              onClick={(event) => kivalaszt(event, props.obj.v4)}
            >
              <span className="valasz">{props.obj.v4}</span>
              <span className="visszajelzes-ikon"></span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
