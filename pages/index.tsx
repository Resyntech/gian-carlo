import { useAppSelector, useAppDispatch } from "../src/redux/hooks"
import {
  increment,
  decrement,
  incrementAsync,
} from "../src/redux/reducers/counterReducer"

export default function Home() {
  const cValue = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="text-3xl bold flex items-center justify-center">
      <h1>{cValue}</h1>
      <input
        className="border-2 border-black"
        type="number"
        onChange={(event) =>
          dispatch(incrementAsync(JSON.parse(event.target.value)))
        }
      />
      <Button title="plus" onClick={() => dispatch(increment())} />
      <Button title="minus" onClick={() => dispatch(decrement())} />
    </div>
  )
}

function Button(props: any) {
  return (
    <button className="capitalize" onClick={props.onClick}>
      {props.title}
    </button>
  )
}
