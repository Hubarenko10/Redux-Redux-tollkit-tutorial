import { increment,decrement } from "redux/slice";
import { selectCount } from "redux/selector";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

export const App = () => {
const count = useSelector(selectCount)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(function(dasdsa))
}, [])
  return (
  <>
      <button type="button" onClick={() => {
    dispatch(increment())  
    }}>Increment</button>
    {count < 1 ? <button disabled>Decrement</button> : <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>}
      <div>{count}</div>
  </>
  );
};
