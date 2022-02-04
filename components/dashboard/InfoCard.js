const InfoCard = ({ data }) => {
  const { name, icon, value, bgcolor, color } = data
  return (
    <div className='flex col-span-3 bg-white p-3 rounded-md items-center'>
      <div className='w-1/3'>
        <div className={`rounded-full ${'bg-[' + bgcolor + ']'} p-2`}>
          <img className={`${'text-[' + color + ']'}`} src={icon} alt={name} />
        </div>
      </div>
      <div className='w-2/3'>
        <h4>{value}</h4>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default InfoCard