import { Form,Button } from "react-bootstrap";
 
export default function ScrapingForm(){
  fetch("https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/anos-anteriores").then(e => console.log(e)).catch(()=> console.warn("Fetch failed"));

  return (
      <Form>
        <Form.Group>
          <Form.Label>Mês</Form.Label>
          <Form.Select>
            <option>-</option>
            <option>Janeiro</option>
            <option>fevereiro</option>
            <option>Março</option>
            <option>Abril</option>
            <option>Maio</option>
            <option>Junho</option>
            <option>Julho</option>
            <option>Agosto</option>
            <option>Setembro</option>
            <option>Outubro</option>
            <option>Novembro</option>
            <option>Dezembro</option>
          </Form.Select>
          <Form.Label>Ano</Form.Label>
          <Form.Control type="Number" min="2003" value="2021"/>
        </Form.Group>
        <Form.Check label="XLS" />
        <Form.Check label="PDF" />
        <Button type="submit">Get</Button>
      </Form>
  )
}