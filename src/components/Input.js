import houseNames from "./Crests.js"

const Input = () => {
  return (
      <div className='input-form'>
        <input
          type='text'
          onChange={ (event) => console.log(event.target.value) }
          />
      </div>
  )
}

export default Input
