import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex flex-row bd-highlight mb-3">
      <Row>
        {device.brands.map((brand) =>
          <Card
            style={{ cursor: 'pointer' }}
            key={brand.id}
            className="p-2"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>,
        )}
      </Row>
    </div>
  );
});
export default BrandBar;
