import { Layout, Radio } from "lucide-react";
import { off, title } from "process";

export const orderSchema = {
    name:"order",
    type:"document",
    title:"order",
    fields:[
        {
            name:"firstName",
            title:"First Name",
            type:"string"
        },
        {
            name:"lastName",
            title:"LastName",
            type:"string"
        },
        {
            name:"addressLine1",
            title:"Address",
            type:"string"
        },
        {
            name:"addressLine2",
            title:"Address",
            type:"string"
        },
        {
            name:"addressLine3",
            title:"Address",
            type:"string"
        },
        {
            name:"city",
            title:"City",
            type:"string"
        },
        {
            name:"state",
            title:"Country",
            type:"string"
        },
        {
            name:"postalCode",
            title:"Postal Code",
            type:"string"
        },
        {
            name:"phoneNumber",
            title:"Phone Number",
            type:"string"
        },
        {
            name:"email",
            title:"Email",
            type:"string"
        },
        {
            name:"cartItems",
            title:"cartitems",
            type:"array",
            of:[{
                type:"reference",
                to:{ type:"product" }
            }]
        },
        {
            name:"total",
            title:"Total",
            type:"number"
        },
        {
            name:"Status",
            title:"order status",
            type:"string",
            options:{
                list:[
                    {title:"pending", value:"pending"},
                    {title:"Success", value:"success"},
                    {title:"Dispatch", value:"dispatch"},
                ],

                Layout:'radio', //opionally,change to dropdown if you prefer to dropdown
            },
            initialValue:"pending" //default value
        },
        
    ]

}