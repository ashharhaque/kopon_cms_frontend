import Link from "next/link"
function Statics() {
  return (
    <div className="flex justify-center items-center bg-green-400 min-h-[55dvh]">
      <ul className="flex justify-center">
        <li className="bg-red-400 w-[40dvw] h-[20dvh] flex justify-center items-center rounded-full mx-4">REPORTS</li>
        <Link href="/restaurants/restaurant/staticsandreports/statics"><li className="bg-yellow-300 w-[40dvw] h-[20dvh] flex justify-center items-center rounded-full">STATICS</li></Link>
      </ul>
    </div>
  )
}

export default Statics