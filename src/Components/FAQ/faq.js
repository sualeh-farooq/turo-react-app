import Accordion from 'react-bootstrap/Accordion';

export function Accord({heading, body}) {
  return (
    <Accordion className='faqSpace'>
      <Accordion.Item eventKey="100">
        <Accordion.Header>{heading}</Accordion.Header>
        <Accordion.Body> {body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
