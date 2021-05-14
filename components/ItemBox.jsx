import Image from "next/image";

export default function ItemBox({ title, description, img }) {
  return (
    <div className="boxItem   col-12 col-lg-4">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
