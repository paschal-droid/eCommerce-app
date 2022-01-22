import "./navbar.css";

function createMarkup(item) {
  return { __html: item.description };
}

const PopupDetails = ({ item }) => {
  return (
    <>
      <div className="cart_popup-details">
        <div className="cart_popup-details_image">
          <img src={item.image.url} alt={item.name} />
        </div>
        <div>
          <p>
            <b>{item.name}</b>
          </p>
          <p dangerouslySetInnerHTML={createMarkup(item)} />
          <p>Size: N/A</p>
          <p>
            <b>{item.price.formatted_with_symbol}</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default PopupDetails;
