
import RichTextEditor from "react-rte";
import styles from "./styles.module.scss";
import {TextInput,Button} from "@mantine/core";
import { useRef, useState } from "react";
import { useForm } from '@mantine/form';
import ReactMarkdown from "react-markdown";




interface ProductInput{
    _id: string,
    name: string,
    author: string,
    genres: string,
    description: string,
    price: number,
    productSupplier: string,
    publishingCompany: string,
    publicYear: number,
    amount: number,
    image: any,
    onSubmit:any ,

}
export default function ProductForm(
{
_id,
name,
author,
genres,
description,
price,
productSupplier,
publishingCompany,
publicYear,
amount,
image,
onSubmit,

}:ProductInput,

)
{
    const [value, setValue] = useState(RichTextEditor.createEmptyValue());
    const onchangehandle = (inputValue: any) => 
    {
    setValue(inputValue);
    };
    const form = useForm({
        initialValues:{
            _id: _id,
            name: name,
            author: author,
            genres: genres,
            price: price,
            productSupplier: productSupplier,
            publishingCompany: publishingCompany,
            publicYear: publicYear,
            amount: amount,
            image: null,
            description :"",
        },
        validate:{
            _id: (data) => (data.length < 5 ? "id error": null),
            name: (data) => (data.length < 5 ? "name error": null),
            author: (data) => (data.length < 0 ? "author error": null),
            genres: (data) => (data.length < 5 ? "genres error": null),
            price: (data) => (data < 1000 ? "price error": null),
            publishingCompany: (data) => (data.length < 5 ? "Publishing Company error": null),
            publicYear: (data) => (data < 2010 || data >  2022 ? "public year error": null),
            amount: (data) => (data < 1 ? "Amount error": null),
            
        }
        
    });
    
    type FormValues = typeof form.values;
    const handleSubmit = (values: FormValues) => console.log(values);

    return(
        <form className={styles.container} onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput label="Id" 
            placeholder="Book's id"
            defaultValue={_id} 
            {...form.getInputProps('_id')}/>

            <TextInput label="Name"
            defaultValue={name}
            placeholder="book's name"
            {...form.getInputProps('name')}
            />

            <TextInput label="Author"
            defaultValue={author}
            {...form.getInputProps('author')}
            />

            <TextInput label="Genres"
            defaultValue={genres}
            {...form.getInputProps('genres')}
            />

            <TextInput type="number" label="Amount"
            defaultValue={amount}
            {...form.getInputProps('amount')}
            />

            <TextInput type="text" label="Product Supplier"
            {...form.getInputProps('productSupplier')}
            defaultValue={productSupplier}/>

            <TextInput type="text" label="Publishing Company"
            defaultValue={publishingCompany}
            {...form.getInputProps('publishingCompany')}
            />

            <TextInput type="number" label="Public Year"
            defaultValue={publicYear}
            {...form.getInputProps('publicYear')}
            />

            <TextInput type="number" label="Price"
            defaultValue={price}
            {...form.getInputProps('price')}
            />
            
            
            <input type="file" {...form.getInputProps('image')} />

            <RichTextEditor
            value={value}
            onChange={(event) => onchangehandle(event)}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}