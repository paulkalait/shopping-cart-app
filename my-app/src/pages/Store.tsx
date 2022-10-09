import { Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

const Store: React.FC = () => {
  return (
    <>
    <Row md={2} xs={1} lg={3} className="g-3">

    {storeItems.map((items) => (
        <Col key={items.id}><StoreItem {...items} /></Col>
    ))}

    </Row>
    </>
  )
}

export default Store