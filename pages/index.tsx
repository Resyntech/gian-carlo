import { useAppSelector, useAppDispatch } from "../src/redux/hooks"
import {
  increment,
  decrement,
  incrementAsync,
} from "../src/redux/reducers/counterReducer"
import ReactToPrint from "react-to-print"
import React from "react"
import Resume from "../components/Resume"

export default function Home() {
  const ref: any = React.useRef()
  const cValue = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div ref={ref}>
        <Resume />
      </div>
      <ReactToPrint
        trigger={() => <Button>Print</Button>}
        content={() => ref.current}
      />
    </>
    // <div className="text-3xl bold flex items-center justify-center h-screen bg-gray-200 w-[80vw] mx-auto">
    //
    //   <h1>{cValue}</h1>
    //   <input
    //     className="border-2 border-black"
    //     type="number"
    //     onChange={(event) =>
    //       dispatch(incrementAsync(JSON.parse(event.target.value)))
    //     }
    //   />
    //   <Button onClick={() => dispatch(increment())}>+</Button>
    //   <Button onClick={() => dispatch(decrement())}>-</Button>
    // </div>
  )
}

function Button(props: any) {
  return (
    <button
      className="capitalize border-2 border-black"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
