export default function Input({textarea = false, placeholder, name, onChange}) {
  return (
    <>
      {textarea ? <textarea
        className="textarea"
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
      ></textarea> :
      <input
        className="input"
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        ></input>}
    </>
  )
}