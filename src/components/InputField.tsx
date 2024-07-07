
type Prop = {
  label:string
  handleChange: (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)  => void
  name:string
  placeholder:string
  value: string
  type: string
}
function InputField({
  label,
  handleChange,
  name,
  placeholder,
  value,
  type
}:Prop) {
  
  return (
    <div>
      <label htmlFor='name'>
        {label}:
      </label>
        <input 
          type={type}
          onChange={(e) => handleChange(e)} 
          value ={value}
          name={name}
          placeholder={placeholder}
          required
        /> 
      </div>
  )
}
export default InputField





