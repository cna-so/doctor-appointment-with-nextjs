export default function RowCase({
  name,
  lastname,
  pNumber,
  deleteAppointmentHandler,
}) {
  return (
    <div className="row-case">
      <h3> نام : {name}</h3>
      <h3> نام خانوادگی: {lastname}</h3>
      <h5> شمارە تلفن : {pNumber}</h5>
      <button className="btn btn-danger " onClick={deleteAppointmentHandler}>
        لغو کردن
      </button>
    </div>
  );
}
