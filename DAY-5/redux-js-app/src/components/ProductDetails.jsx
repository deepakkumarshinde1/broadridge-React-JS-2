import React, { Component, memo } from "react";
import { withParams } from "../hoc/withParams";
import { withProductContext } from "../hoc/withCommon";
import AddCartButton from "./shared/AddCartButton";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props._productContext.productDetails,
    };
  }

  static getDerivedStateFromProps(newProps, oldState) {
    return {
      details: newProps._productContext.productDetails,
    };
  }

  componentDidMount() {
    let { getProductDetails } = this.props._productContext;
    let { id } = this.props._params;
    getProductDetails(id);
  }

  render() {
    let details = this.state.details;
    return (
      <>
        {this.state.details && (
          <>
            <div className="product-details">
              <section className="image-section">
                <img className="main-image" src={details.images[0]} alt="" />
                <section className="image-gallery">
                  {details.images.map((image, index) => {
                    return (
                      <section key={index}>
                        <img src={image} />
                      </section>
                    );
                  })}
                </section>
              </section>
              <section className="product-main-details">
                <h2>{details.title}</h2>
                <p>{details.description}</p>
                <p>$ {details.price}</p>
                <AddCartButton product={details} />
              </section>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withProductContext(withParams(ProductDetails));
