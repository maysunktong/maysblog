import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";



export default function Home() {
  const [state, setState] = useState({ show: true });
    
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        nostrum praesentium suscipit laboriosam cupiditate vero ex dolores
        dolor, veritatis nam numquam corporis doloremque obcaecati minima
        assumenda veniam recusandae
        <RoughNotation type="highlight" show={true} color="#b71c1c">
          ratione perferendis ea, amet harum officia neque iure ullam. Nesciunt
        </RoughNotation>
        quisquam repellendus impedit laboriosam, magni officia repudiandae hic
        qui. Rerum, sint facere!
      </h1>
      <RoughNotationGroup show={state.show}>
        <RoughNotation type="highlight" order="3">
          Hello,
        </RoughNotation>
        <RoughNotation type="highlight" order="2">
          This is
        </RoughNotation>
        <RoughNotation type="highlight" order="1">
          a Test
        </RoughNotation>
      </RoughNotationGroup>
    </>
  );
}
