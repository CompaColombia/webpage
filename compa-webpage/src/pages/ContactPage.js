import Title from '../components/Title';
import { MdKeyboardArrowDown } from "react-icons/md";
import FormSection from '../components/FormSection';
import Input from '../components/Input';
import { useState } from 'react';

export default function ContactPage() {

  const [data, setData] = useState({name: 'Default', phone: '', email: '', description: ''})
  
  const onChange = (name, value) => {
    console.log(data.name)
    setData(data[name] = value)
  }

  return (
    <div className='contactpage'>
      <Title
        titleText={'Aquí puedes contarnos acerca de tu'}
        words={['Proyecto', ' Idea', ' Sueño', 'Problema']}
        extraText={
          <MdKeyboardArrowDown style={{
            fontSize: '100px',
            marginTop: '-50px'
          }} />
        }
      />
      <p className='form-prev-msg'>Diligencia este formulario para que podamos contactarte</p>
      <section>
        <FormSection
          title={'Información de contacto'}
          formContent={
            <div>
              <Input onChange={(name, value) => onChange(name, value)} placeholder='Nombre' name='name' />
              <Input onChange={(name, value) => onChange(name, value)} placeholder='Teléfono' name='phone' />
              <Input onChange={(name, value) => onChange(name, value)} placeholder='Email' name='email' />
              <Input onChange={(name, value) => onChange(name, value)} placeholder='Nombre del proyecto' name='projectname' />
            </div>
          }
        />
        <FormSection
          title={'Costos'}
          formContent={
            <div>
              <Input placeholder='Costo total' name='cost' />
            </div>
          }
        />
        <FormSection
          title={'Descripción'}
          formContent={
            <div>
              <Input textarea={true} placeholder='description' name='Descripción del proyecto' />
            </div>
          }
        />
      </section>
    </div>
  );
}
