import React from 'react'

export default function cartForm(props) {
  return (
    <form onSubmit={props.onSubmitForm}>
        <div>
            <label>Product Name : </label>
            <input type='text' placeholder='Product Name' 
            onChange={props.handleOnChange('prod_name')}></input>
        </div>
        <div>
            <label>Price : </label>
            <input type='text' placeholder='Price' 
            onChange={props.handleOnChange('prod_price')}></input>
        </div>
        <div>
            <label>Product Qty : </label>
            <input type='text' placeholder='Product Qty' 
            onChange={props.handleOnChange('prod_qty')}></input>
        </div>
        <div>
            <label>Category : </label>
            <select onChange={props.handleOnChange('category')}>
                <option>Choice Category</option>
                {
                    props.category.map((value,index)=>
                    <option key={index}>{value}</option>)
                }
            </select>
        </div>
        <div>
            <label>Sub Category : </label>
            <select>
                <option>Choice Sub Category</option>
                {
                    props.subCategory.map((value,index)=>
                    <option key={index.subname}>{value.subname}</option>)
                }
            </select>
        </div>
        <div>
            <button type='submit'>Simpan</button>
            <button onClick={()=>props.setDisplay(false)}>Cancel</button>
        </div>
    </form>
  )
}
