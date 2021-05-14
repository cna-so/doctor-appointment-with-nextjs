export default function RowCase({ subject, description, pNumber, deleteReqHandler }) {

  return (
    <div className="row-case">
      <h3> موضوع : {subject}</h3>
      <h5> شمارە تلفن : {pNumber}</h5>
      <p>
        <b> توضیحات : </b>
        {description}
      </p>
      <button className="btn btn-danger " onClick={deleteReqHandler}>
        حذف
      </button>
    </div>
  );
}
