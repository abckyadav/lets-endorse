import React, { useState } from "react";

const Home = () => {
  const initialState = {
    uname: "",
    business_stage: "",
    age_of_establishment: "",
    primary_product_service_offered: "",
    offered_to: "",
    secondary_product_service_offered: "",
    processed_products: "",
    relevant_experience: "",
    skill_training: "",
    establishment_type: "",
    business_area: "",
    business_locality: "",
    infra_ownership: "",
    establishment_area: "",
    reason_for_location: "",
    market_research: "",
    primary_market: "",
    customers: "",
    seasonality: "",
    competition: "",
    suppliers: "",
    marketing_avenues: "",
    scaleup_potential: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [usp, setUsp] = useState([]);
  const [reason_for_location, setReason_for_location] = useState([]);
  const [marketing_avenues, setMarketing_avenues] = useState([]);
  const [scaleup_potential, setScaleup_potential] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("formData:", formData);
  };

  const handleUsp = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setUsp([...usp, value]);
    } else {
      setUsp(usp.filter((item) => item !== value));
    }
  };
  console.log("usp:", usp);

  const handleReason_for_location = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setReason_for_location([...reason_for_location, value]);
    } else {
      setReason_for_location(
        reason_for_location.filter((item) => item !== value)
      );
    }
  };
  console.log("reason_for_location:", reason_for_location);

  const handleMarketing_avenues = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMarketing_avenues([...marketing_avenues, value]);
    } else {
      setMarketing_avenues(marketing_avenues.filter((item) => item !== value));
    }
  };
  console.log("marketing_avenues:", marketing_avenues);

  const handleScaleup_potential = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setScaleup_potential([...scaleup_potential, value]);
    } else {
      setScaleup_potential(scaleup_potential.filter((item) => item !== value));
    }
  };
  console.log("scaleup_potential:", scaleup_potential);

  return (
    <div>
      <h1>Introduction</h1>

      <div className="container">
        <div className="left_container">
          <form>
            <h1>Form Data</h1>
            <div className="input_div">
              <label>Name</label>
              <input
                type="text"
                name="uname"
                placeholder="Name"
                value={formData.uname}
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Stage of business</label>
              <select
                name="business_stage"
                value={formData.business_stage}
                onChange={handleChange}
              >
                <option>---</option>
                <option value="Start-up">Start-up</option>
                <option value="Scale-up">Scale-up</option>
              </select>
            </div>

            <div className="input_div">
              <label>
                Age of establishment (years) (Enter 0 if it is yet to start-up)
              </label>
              <input
                type="number"
                name="age_of_establishment"
                min="0"
                max="100"
                value={formData.age_of_establishment}
                placeholder="Age of establishment"
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Primary Products/Services offfered</label>
              <input
                type="text"
                name="primary_product_service_offered"
                value={formData.primary_product_service_offered}
                placeholder="Primary Products/Services offfered"
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Offered to</label>
              <select
                id="offered"
                name="offered_to"
                value={formData.offered_to}
                onChange={handleChange}
              >
                <option value="">---</option>
                <option value="End customers">End customers</option>
                <option value="Wholesalers">Wholesalers</option>
                <option value="Distributors">Distributors</option>
                <option value="Retailers">Retailers</option>
              </select>
            </div>

            <div className="input_div">
              <label>Secondary Products/Services offfered</label>
              <input
                type="text"
                placeholder="Secondary Products/Services offfered"
                name="secondary_product_service_offered"
                value={formData.secondary_product_service_offered}
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>
                Processed products (Products you produce from the raw materials)
              </label>
              <input
                type="text"
                placeholder="Processed Products"
                name="processed_products"
                value={formData.processed_products}
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Years of relevant experience in this field</label>
              <input
                type="number"
                name="relevant_experience"
                value={formData.relevant_experience}
                placeholder="Relevant Experience"
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Skill training</label>
              <select
                id="skill"
                name="skill_training"
                value={formData.skill_training}
                onChange={handleChange}
              >
                <option value="">---</option>
                <option value="no formal skill training">
                  No formal skill training
                </option>
                <option value="has formal skill training and certificate">
                  Has formal skill training and certificate
                </option>
              </select>
            </div>

            <div className="input_div">
              <label>Unique Selling Proposition</label>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="the entrepreneur's experience in this field"
                />{" "}
                <label>The entrepreneur's experience in this field.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="innovative product/service"
                />{" "}
                <label>Innovative product/service.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="high profit margin"
                />{" "}
                <label>High profit margin</label>{" "}
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="high growth potential"
                />{" "}
                <label>High growth potential</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="superior customer support"
                />{" "}
                <label>Superior customer support</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="quality and affordable products/service"
                />{" "}
                <label>Quality and affordable products/service</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="high demand in the target market (forward linkage)"
                />{" "}
                <label>
                  High demand in the target market (forward linkage).
                </label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="abundant supply of raw materials (backward linkage)"
                />{" "}
                <label>
                  Abundant supply of raw materials (backward linkage).
                </label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="wide range of products/services"
                />{" "}
                <label>Wide range of products/services.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="robust value-chain of the business"
                />{" "}
                <label>Robust value-chain of the business</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="frequencyy of customer visits"
                />{" "}
                <label>Frequency of customer visits</label>
              </span>
            </div>

            <h1>Location</h1>
            <div className="input_div">
              <label>Establishment type</label>
              <select
                id="type"
                name="establishment_type"
                value={formData.establishment_type}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Factory">Factory</option>
                <option value="Mill">Mill</option>
                <option value="Workshop">Workshop</option>
                <option value="Boutique">Boutique</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Center">Center</option>
                <option value="Store">Store</option>
                <option value="Farm">Farm</option>
                <option value="Plant">Plant</option>
                <option value="Processing Unit">Processing Unit</option>
                <option value="Shop">Shop</option>
                <option value="Vending cart">Vending cart</option>
                <option value="Manufacturing unit">Manufacturing unit</option>
              </select>
            </div>

            <div className="input_div">
              <label>Name of the area</label>
              <input
                type="text"
                name="business_area"
                value={formData.business_area}
                placeholder="Business area"
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Locality of business</label>
              <select
                id="Locality"
                name="business_locality"
                value={formData.business_locality}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Urban">Urban</option>
                <option value="Rural">Rural</option>
                <option value="Semi-urban">Semi-urban</option>
                <option value="Slum">Slum</option>
              </select>
            </div>

            <div className="input_div">
              <label>Ownership of infrastructure</label>
              <select
                id="ownership"
                name="infra_ownership"
                value={formData.infra_ownership}
                onChange={handleChange}
              >
                <option value="Rented">Rented</option>
                <option value="Leased">Leased</option>
                <option value="Self-owned">Self-owned</option>
              </select>
            </div>

            <div className="input_div">
              <label>
                Establishment area (in square feet) (Enter 0 if the
                establishment area is irrelevant)
              </label>
              <input
                type="number"
                name="establishment_area"
                value={formData.establishment_area}
                placeholder="Establishment area"
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Reason for selecting this location</label>
              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to market"
                />{" "}
                <label>Nearness to market</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Good footfall"
                />{" "}
                <label>Good footfall.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to source of raw materials"
                />{" "}
                <label>Nearness to source of raw materials.</label>{" "}
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to targeted customer demographics"
                />{" "}
                <label>Nearness to targeted customer demographics.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Lesser competition around"
                />{" "}
                <label>Lesser competition around</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Access to permit/license of operate"
                />{" "}
                <label>Access to permite/license of operate</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to suppliers"
                />{" "}
                <label>Nearness to suppliers.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Affordability (rent)"
                />{" "}
                <label>Affordability (rent).</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="No rental overheads"
                />{" "}
                <label>No rental overheads.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Other such factors"
                />{" "}
                <label>Other such factors.</label>
              </span>
            </div>

            <h1>Target Market</h1>
            <div className="input_div">
              <label>Market research</label>
              <select
                name="market_research"
                value={formData.market_research}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Not Conducted">Not Conducted</option>
                <option value="Market research has been conducted">
                  Market research has been conducted
                </option>
              </select>
            </div>

            <div className="input_div">
              <label>Primary market</label>
              <select
                name="primary_market"
                value={formData.primary_market}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Local">Local</option>
                <option value="Regional">Regional</option>
                <option value="National">National</option>
                <option value="International">International</option>
              </select>
            </div>

            <div className="input_div">
              <label>Customers</label>
              <input
                type="text"
                name="customers"
                value={formData.customers}
                placeholder="Customers"
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Seasons of high sales</label>
              <select
                name="seasonality"
                value={formData.seasonality}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Consistent sales across all seasons">
                  Consistent sales across all seasons
                </option>
                <option value="Higher sales in festive seasons">
                  Higher sales in festive seasons
                </option>
                <option value="High sales in cropping/cultivation season">
                  High sales in cropping/cultivation season
                </option>
                <option value="High sales in peak seasons,etc">
                  High sales in peak season,etc
                </option>
              </select>
            </div>

            <div className="input_div">
              <label>Competition</label>
              <select
                id="competition"
                name="competition"
                value={formData.competition}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="No similar good/service provider in this locality">
                  No similar good/service provider in this locality
                </option>
                <option value="Only a few similar goods/service providers in this locality">
                  Only a few similar goods/service providers in this locality
                </option>
                <option value="Many similar good/service providers in this locality">
                  Many similar good/service providers in this locality
                </option>
              </select>
            </div>

            <div className="input_div">
              <label>Suppliers</label>
              <input
                type="text"
                name="suppliers"
                value={formData.suppliers}
                placeholder="Suppliers"
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Market Avenues</label>
              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="distribution of marketing material (pamphlets/flyers)"
                />{" "}
                <label>
                  Distribution of marketing material(pamphelets/flyers).
                </label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="storefront/business branding"
                />{" "}
                <label>Storefront/business branding</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Seasonal discounts and offers"
                />{" "}
                <label>Seasonal discounts and offers.</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Cross-promotion"
                />{" "}
                <label>Cross-promotion</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Digital Marketing"
                />{" "}
                <label>Digital Marketing</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Word of mouth"
                />{" "}
                <label>Word of Mouth</label>
              </span>
            </div>

            <h1>Scaling up potential</h1>
            <div className="input_div">
              <label>Aveneus of scaling up in future</label>
              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="increasing the variety of product/service offering"
                />{" "}
                <label>
                  Increasing the variety of product/service offering
                </label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="expanding the current offering to other geographies"
                />{" "}
                <label>
                  Expanding the current offering to other geographies
                </label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="opening more outlets"
                />{" "}
                <label>Opening more outlets</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="growing the scale of operation"
                />{" "}
                <label>Growing the scale of operation</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="building value-chain integrations"
                />{" "}
                <label>Building value-chain integrations</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="other allied revenue streams"
                />{" "}
                <label>Other allied revenue streams.</label>
              </span>
            </div>
          </form>
        </div>

        <div className="right_container">
          <p>
            {formData.uname} is looking to {formData.business_stage} their
            business of $business_idea.
          </p>

          <p>
            This enterprise has been operational since{" "}
            {formData.age_of_establishment} years and has been serving its
            customers since then.
          </p>
          <p>
            This establishment offers products/services like-{" "}
            {formData.primary_product_service_offered} to {formData.offered_to}.
          </p>
          <p>
            In addition, the enterprise shall also be involved in-{" "}
            {formData.secondary_product_service_offered}
          </p>
          <p>
            Other products of the enterprise shall include-{" "}
            {formData.processed_products}
          </p>
          <p>
            $name has relevant experience of {formData.relevant_experience}{" "}
            years in this field.
          </p>
          <p>
            The entrepreneur {formData.skill_training} in this field of work.
          </p>

          <p>
            The enterprise is uniquely positioned because of its -
            <div>
              {usp.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </p>

          <p>
            The {formData.establishment_type} is located in
            {formData.business_locality} area of $city in a $
            {formData.infra_ownership}
            property.
          </p>
          <p>
            The size of the establishment is {formData.establishment_area}{" "}
            sq.ft.
          </p>
          <p>
            This locality is selected because of -
            <div>
              {reason_for_location.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
            `
          </p>
          <p>
            {formData.market_research} and the range of products and target
            market has been identified after that.
          </p>
          <p>
            The enterprise shall focus on offering its products/services to
            {formData.primary_market} markets.
          </p>
          <p>Our customers shall include- {formData.customers}</p>
          <p>
            The nature of the business is such that we expect
            {formData.seasonality}.
          </p>
          <p>Regarding competition, there are {formData.competition}.</p>
          <p>
            The enterprise shall procure goods/raw materials from
            {formData.suppliers}.
          </p>
          <p>
            Our marketing avenues to reach the targeted customers shall include-
            <div>
              {marketing_avenues.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </p>
          <p>
            The various foreseeable avenues of scaling up and growing the
            business in the foreseeable future include-
            <div>
              {scaleup_potential.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
