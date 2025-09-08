import React from 'react'

const Product = ({products}) => {
    console.log(products);
  return (
    <div >
      <h1>Products List</h1>
      <ul  style = {{
       
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: 0,
        margin: 0,
        justifyContent: "center"

    }}>
        {products.map((prod) =>{
           return (
           <li key={prod.id}  
           style={{
                     border: "1px solid #ccc",
                     padding: "20px",
                     borderRadius: "8px",
                     textAlign: "center",
                     listStyle: "none",
                     width: "200px",
                     boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                   }}
           >
                <img src={prod.image} alt={prod.name}  
                    style={{
                        borderRadius: "50%",
                        border: "1px solid #000",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginBottom: "10px"
                        }}
                    />
                
                <h2 style={{ fontSize: "16px", margin: "10px 0" }}>
                    {prod.name}
                </h2>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    ₹{prod.price}
                </p>
                <button style={{
                    padding: "8px 12px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}>
                    Add to Cart
                </button>

            </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Product
