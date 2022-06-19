import React, { useState } from "react";

const Home = () => {
  const initialState = {
    name: "",
    business_idea: "",
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
    market_research: "",
    primary_market: "",
    customers: "",
    seasonality: "",
    competition: "",
    suppliers: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [usp, setUsp] = useState([]);
  const [reason_for_location, setReason_for_location] = useState([]);
  const [marketing_avenues, setMarketing_avenues] = useState([]);
  const [scaleup_potential, setScaleup_potential] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "age_of_establishment" && value > 100) {
      setError(true);
    } else {
      setError(false);
    }
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
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        LetsEndorse Assignment
      </h1>

      <div className="container">
        <div className="left_container">
          <form>
            <h1>Introduction</h1>
            <div className="input_div">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input_div">
              <label>Business Idea</label>
              <input
                type="text"
                name="business_idea"
                placeholder="Business idea"
                value={formData.business_idea}
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
                onInput={handleChange}
              />

              {error === true ? (
                <p>Enter valid age of establishment between 0 to 100</p>
              ) : (
                ""
              )}
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

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="the entrepreneur's experience in this field"
                />
                <label>The entrepreneur's experience in this field.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="innovative product/service"
                />
                <label>Innovative product/service.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="high profit margin"
                />
                <label>High profit margin</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="high growth potential"
                />
                <label>High growth potential</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="superior customer support"
                />
                <label>Superior customer support</label>
              </div>

              <div className="input-checkbox" n>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="quality and affordable products/service"
                />
                <label>Quality and affordable products/service</label>
              </div>

              <div className="input-checkbox" an>
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="high demand in the target market (forward linkage)"
                />
                <label>
                  High demand in the target market (forward linkage).
                </label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="abundant supply of raw materials (backward linkage)"
                />{" "}
                <label>
                  Abundant supply of raw materials (backward linkage).
                </label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="wide range of products/services"
                />{" "}
                <label>Wide range of products/services.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="robust value-chain of the business"
                />{" "}
                <label>Robust value-chain of the business</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleUsp(e)}
                  value="frequencyy of customer visits"
                />{" "}
                <label>Frequency of customer visits</label>
              </div>
            </div>

            <h1>Location</h1>
            <div className="input_div">
              <label>Establishment type</label>
              <select
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
                name="infra_ownership"
                value={formData.infra_ownership}
                onChange={handleChange}
              >
                <option value=""></option>
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
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to market"
                />{" "}
                <label>Nearness to market</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Good footfall"
                />{" "}
                <label>Good footfall.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to source of raw materials"
                />{" "}
                <label>Nearness to source of raw materials.</label>{" "}
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to targeted customer demographics"
                />{" "}
                <label>Nearness to targeted customer demographics.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Lesser competition around"
                />{" "}
                <label>Lesser competition around</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Access to permit/license of operate"
                />{" "}
                <label>Access to permite/license of operate</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Nearness to suppliers"
                />{" "}
                <label>Nearness to suppliers.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Affordability (rent)"
                />{" "}
                <label>Affordability (rent).</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="No rental overheads"
                />{" "}
                <label>No rental overheads.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleReason_for_location(e)}
                  value="Other such factors"
                />{" "}
                <label>Other such factors.</label>
              </div>
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
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="distribution of marketing material (pamphlets/flyers)"
                />{" "}
                <label>
                  Distribution of marketing material(pamphelets/flyers).
                </label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="storefront/business branding"
                />{" "}
                <label>Storefront/business branding</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Seasonal discounts and offers"
                />{" "}
                <label>Seasonal discounts and offers.</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Cross-promotion"
                />{" "}
                <label>Cross-promotion</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Digital Marketing"
                />{" "}
                <label>Digital Marketing</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleMarketing_avenues(e)}
                  value="Word of mouth"
                />{" "}
                <label>Word of Mouth</label>
              </div>
            </div>

            <h1>Scaling up potential</h1>
            <div className="input_div">
              <label>Avenues of scaling up in future</label>
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="increasing the variety of product/service offering"
                />{" "}
                <label>
                  Increasing the variety of product/service offering
                </label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="expanding the current offering to other geographies"
                />{" "}
                <label>
                  Expanding the current offering to other geographies
                </label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="opening more outlets"
                />{" "}
                <label>Opening more outlets</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="growing the scale of operation"
                />{" "}
                <label>Growing the scale of operation</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="building value-chain integrations"
                />{" "}
                <label>Building value-chain integrations</label>
              </div>

              <div className="input-checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleScaleup_potential(e)}
                  value="other allied revenue streams"
                />{" "}
                <label>Other allied revenue streams.</label>
              </div>
            </div>
          </form>
        </div>

        <div className="right_container">
          <p>
            <span> {formData.name} </span> is looking to{" "}
            <span> {formData.business_stage} </span> their business of{" "}
            <span> {formData.business_idea} </span>.
          </p>

          {formData.age_of_establishment !== "0" ? (
            <p>
              This enterprise has been operational since{" "}
              <span> {formData.age_of_establishment} </span> years and has been
              serving its customers since then.
            </p>
          ) : (
            ""
          )}

          <p>
            This establishment offers products/services like-{" "}
            <span> {formData.primary_product_service_offered} </span> to{" "}
            <span> {formData.offered_to} </span> .
          </p>

          {formData.secondary_product_service_offered !== "" ? (
            <p>
              In addition, the enterprise shall also be involved in-{" "}
              <span> {formData.secondary_product_service_offered} </span>
            </p>
          ) : (
            ""
          )}

          {formData.processed_products !== "" ? (
            <p>
              Other products of the enterprise shall include-{" "}
              <span> {formData.processed_products} </span>
            </p>
          ) : (
            ""
          )}

          {formData.processed_products !== "" ? (
            <p>
              <span> {formData.name} </span> has relevant experience of{" "}
              <span> {formData.relevant_experience} </span> years in this field.
            </p>
          ) : (
            ""
          )}

          {formData.skill_training !== "no formal skill training" || "" ? (
            <p>
              The entrepreneur <span> {formData.skill_training} </span> in this
              field of work.
            </p>
          ) : (
            ""
          )}

          <p>
            The enterprise is uniquely positioned because of its -
            <span>
              {usp.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </span>
          </p>
          <p>
            The <span> {formData.establishment_type} </span> is located in
            <span> {formData.business_locality} </span> area of
            <span> {formData.business_area} </span> in a
            <span> {formData.infra_ownership} </span>
            property.
          </p>

          {formData.establishment_area !== "0" ? (
            <p>
              The size of the establishment is
              <span> {formData.establishment_area} </span>
              sq.ft.
            </p>
          ) : (
            ""
          )}

          <p>
            This locality is selected because of -
            <span>
              {reason_for_location.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </span>
            `
          </p>

          {formData.market_research !== "Not Conducted" ? (
            <p>
              <span> {formData.market_research} </span> and the range of
              products and target market has been identified after that.
            </p>
          ) : (
            ""
          )}

          <p>
            The enterprise shall focus on offering its products/services to
            <span> {formData.primary_market} </span> markets.
          </p>
          <p>
            Our customers shall include- <span> {formData.customers} </span>
          </p>
          <p>
            The nature of the business is such that we expect
            <span> {formData.seasonality} </span>.
          </p>
          <p>
            Regarding competition, there are
            <span> {formData.competition} </span>.
          </p>
          <p>
            The enterprise shall procure goods/raw materials from
            <span> {formData.suppliers} </span> .
          </p>
          <p>
            Our marketing avenues to reach the targeted customers shall include-
            <span>
              {marketing_avenues.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </span>
          </p>
          <p>
            The various foreseeable avenues of scaling up and growing the
            business in the foreseeable future include-
            <span>
              {scaleup_potential.map((item, i) => (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
