

function CircleNumber({className,children}) {
  return (
    <div className={`${className} bg-red-500  absolute -top-1/4 -right-1 rounded-full p-2 flex justify-center items-center`}>{children}</div>
  )
}

export default CircleNumber