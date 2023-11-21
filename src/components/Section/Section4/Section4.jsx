import "./Section4.css";

export default function Section4() {
  return (
    <div className="Section4">
      <img src="./Section4.png" className="section4-img"></img>
      <div className="section4-text">
        <h1>
          이제 직접 나가지 않아도
          <br />
          편리하게 수거까지!
        </h1>
        <input
          type="button"
          value="수선 관리 바로가기"
          className="section-button"
        ></input>
      </div>
    </div>
  );
}
