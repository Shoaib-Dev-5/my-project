const Common = ({val}) => {
  return (
    <div className="w-[200px] max-h-[300px] basis-[20%]">
        <img className="w-full" src={val.img} alt="nn" />
        <div className="flex justify-between">
            <p>title</p>
            <p>price</p>
        </div>
    </div>
  )
}

export default Common