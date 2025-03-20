// filepath: c:\Users\Lenovo\mealharbor\app\api\payment\route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2022-11-15",
  });
  let data = await request.json();
  let priceId = data.priceId;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: process.env.SITE_URL as string,
    cancel_url: process.env.SITE_URL as string,
  });

  return NextResponse.json(session.url);
}
