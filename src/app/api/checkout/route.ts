import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY || "sk_test_51Qo6rm2LLi2Z3MdZWsrRBTes4PTWOU3PP657k3jmCSBoxPEGCAb4Bzr7keVNzcmdqFOYk8LZN6Pr937SiNZ5kt9u00fB7yBEJ5", {
    // apiVersion: "2024-12-18.acacia"
})

export async function POST() {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: "https://www.google.com/",
            cancel_url: "https://www.fast.com",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Product 1",
                            description: "This is my stripe test product"
                        },
                        unit_amount: 2000
                    }
                }
            ]
        })
        console.log("Session ID :", session.id)
        return NextResponse.json({ sessionId: session.id })
    } catch (err) {
        return NextResponse.json({ err: err })
    }
}
