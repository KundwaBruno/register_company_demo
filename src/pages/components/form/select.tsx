/* eslint-disable react/jsx-props-no-spreading */

import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

interface ISelectInputProps {
  label: string;
  placeholder: string;
}

function SelectInput(
  props: ISelectInputProps &
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
) {
  const { label, placeholder, required } = props;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-sm">
        {label} {required ? <span className="text-danger">*</span> : null}
      </label>
      <select
        id="sectors"
        className="focus:border-primary placeholder:text-container rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring"
      >
        <option value={undefined}>{placeholder}</option>
        <optgroup label="Manufacturing">
          <option value="19">Construction materials</option>
          <option value="18">Electronics and Optics</option>
        </optgroup>
        <optgroup label="Food and Beverage">
          <option value="342">Bakery &amp; confectionery products</option>
          <option value="43">Beverages</option>
          <option value="42">Fish &amp; fish products </option>
          <option value="40">Meat &amp; meat products</option>
          <option value="39">Milk &amp; dairy products </option>
          <option value="437">Other</option>
          <option value="378">Sweets &amp; snack food</option>
        </optgroup>
        <optgroup label="Furniture">
          <option value="13">Furniture</option>
          <option value="389">Bathroom/sauna </option>
          <option value="385">Bedroom</option>
          <option value="390">Children’s room </option>
          <option value="98">Kitchen </option>
          <option value="101">Living room </option>
          <option value="392">Office</option>
          <option value="394">Other (Furniture)</option>
          <option value="341">Outdoor </option>
          <option value="99">Project furniture</option>
        </optgroup>
        <optgroup label="Machinery">
          <option value="12">Machinery</option>
          <option value="94">Machinery components</option>
          <option value="91">Machinery equipment/tools</option>
          <option value="224">Manufacture of machinery </option>
          <option value="97">Maritime</option>
          <option value="271">Aluminium and steel workboats </option>
          <option value="269">Boat/Yacht building</option>
          <option value="230">Ship repair and conversion</option>
          <option value="93">Metal structures</option>
          <option value="227">Repair and maintenance service</option>
          <option value="508">Other</option>
        </optgroup>

        <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
        <option value="67">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal
          structures
        </option>
        <option value="263">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings
        </option>
        <option value="267">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products
        </option>
        <option value="542">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works
        </option>
        <option value="75">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining
        </option>
        <option value="62">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,
          Fasteners{" "}
        </option>
        <option value="69">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,
          Plasma, Laser cutting
        </option>
        <option value="66">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,
          TIG, Aluminum welding
        </option>
        <option value="9">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
        <option value="54">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
        </option>
        <option value="556">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods
        </option>
        <option value="559">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing
          technology
        </option>
        <option value="55">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
        </option>
        <option value="57">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
        </option>
        <option value="53">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
          welding and processing
        </option>
        <option value="560">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
        </option>
        <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
        <option value="148">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
        </option>
        <option value="150">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals
          printing
        </option>
        <option value="145">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and
          packaging printing
        </option>
        <option value="7">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
        <option value="44">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
        </option>
        <option value="45">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
        </option>
        <option value="8">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
        <option value="337">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
        </option>
        <option value="51">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building
          materials
        </option>
        <option value="47">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses
        </option>
        <option value="3">Other</option>
        <option value="37">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
        <option value="29">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
        <option value="33">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
        <option value="2">Service</option>
        <option value="25">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
        <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
        <option value="28">
          &nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications
        </option>
        <option value="581">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web
          portals, E-marketing
        </option>
        <option value="576">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming,
          Consultancy
        </option>
        <option value="121">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware
        </option>
        <option value="122">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
        </option>
        <option value="22">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
        <option value="141">
          &nbsp;&nbsp;&nbsp;&nbsp;Translation services
        </option>
        <option value="21">
          &nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics
        </option>
        <option value="111">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air
        </option>
        <option value="114">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail
        </option>
        <option value="112">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road
        </option>
        <option value="113">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water
        </option>
      </select>
    </div>
  );
}

export default SelectInput;
