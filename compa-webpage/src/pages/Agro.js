import ColombianMap from "../components/ColombianMap";
import Table from "../components/Table"

export default function Agro() {

  const data = [
    {'id': 0, 'name': 'Manzana', "price": '1000'},
    {'id': 1, 'name': 'Manzana', "price": '1000'},
    {'id': 2, 'name': 'Manzana', "price": '1000'},
    {'id': 3, 'name': 'Manzana', "price": '1000'},
  ]
  
  return (
    <>
      <div className='Agro'>
        <h1>Agro</h1>
        <div className='Map-table-section'>
          <ColombianMap />
          <Table title={'Productos'} headers={["Nombre", "Precio"]} data={data} />
        </div>
      </div>
    </>
  );
}
