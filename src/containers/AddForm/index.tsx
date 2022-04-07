
import * as axios from "axios"

import ProductForm from "../../components/ProductForm";
export default function AddForm()
{   
    const handleSubmit = (data:any) =>{
        console.log(data)
        try{
            axios.default.post("https://fahasa-api-fahasa-nomorechokedboy.cloud.okteto.net/v1/api/product",data)
        }
    catch(error)
    {
        console.log(error)
    }
}
   

    return(
        <ProductForm 
        onSubmit={handleSubmit}
        _id={"ff25a"}
        name={"hello"} author={"tri"} 
        genres={"aaaaaaa"}description={""}
        price={10000} productSupplier={"aaaaaaaaaaa"} 
        publishingCompany={"aaaaaa"} publicYear={2012}
        amount={15} image={"https://res.cloudinary.com/fahasa-replica/image/upload/v1648972532/singleProductImage/vsjqqazx9vnb9jwqgtt7.jpg"} />
    )



}