import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import "../css/Collection.css";
import Title from "../component/Title";
import ProductItem from "../component/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts]=useState([])
  const [category,setCatogery]=useState([])
  const [subCategory,setSubCategory]=useState([])
  const[sortType,setSortType]=useState("relavent")

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCatogery(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setCatogery(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice()
    if(showSearch&&search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length >0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct=()=>{
    const fpCopy=filterProducts.slice();
    switch(sortType){
      case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
      break;
      case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
      break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])
  useEffect(()=>{
    sortProduct()
  },[sortType])
  return (
    <div className="collection">
      {/* Filters */}

      <div className="collection-filters">
        <div
          className="filter-title"
          onClick={() => setShowFilter(!showFilter)}
        >
          <p>FILTERS</p>

          <img
            className={`filter-arrow ${showFilter ? "rotate" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </div>

        <div className={`filter-content ${showFilter ? "" : "hidden-mobile"}`}>
          <div className="filter-box">
            <p className="filter-heading">CATEGORIES</p>

            <div className="filter-options">
              <p>
                <input type="checkbox" value="Men" onChange={toggleCategory}/>
                Men
              </p>

              <p>
                <input type="checkbox" value="Women"onChange={toggleCategory} />
                Women
              </p>

              <p>
                <input type="checkbox" value="Kids" onChange={toggleCategory}/>
                Kids
              </p>
            </div>
          </div>

          <div className="filter-box">
            <p className="filter-heading">TYPE</p>

            <div className="filter-options">
              <p>
                <input type="checkbox" value="Topwear"  onChange={toggleSubCategory} />
                Topwear
              </p>

              <p>
                <input type="checkbox" value="Bottomwear"  onChange={toggleSubCategory} />
                Bottomwear
              </p>

              <p>
                <input type="checkbox" value="Winterwear"  onChange={toggleSubCategory} />
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}

      <div className="collection-products">
        <div className="collection-header">
          <Title text1="ALL" text2="COLLECTION" />

          <select  onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant">Sort by: Relevant</option>
            <option value="high-low" >Sort by: High to Low</option>
            <option value="low-high" >Sort by: Low to High</option>
          </select>
        </div>

        <div className="product-grid">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
