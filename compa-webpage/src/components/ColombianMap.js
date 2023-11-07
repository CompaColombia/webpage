import { useEffect, useState } from "react";
import MapSvg from "./MapSvg";

const ColombianMap = () => {

  const [regionSelected, setRegionSelected] = useState({})
  const [prevDepartment, setPrevDepartment] = useState(null)
  const [title, setTitle] = useState('Selecciona un departamento')

  useEffect(() => {
    if (Object.keys(regionSelected).length !== 0) {

      const department = document.getElementById(regionSelected.getAttribute('id'))
      if (department !== null) department.style.fill = 'red'
      if (prevDepartment !== null) prevDepartment.style.fill = 'black'
      
      setPrevDepartment(department);
      setTitle(regionSelected.getAttribute('name') || title)
    }
  }, [regionSelected]);

  return (
    <div>
      <h3>{title}</h3>
      <MapSvg setRegionSelected={setRegionSelected} />
    </div>
  );
}

export default ColombianMap;