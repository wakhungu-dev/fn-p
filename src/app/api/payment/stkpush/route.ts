import { safaricomDarajaApi } from "mds-daraja-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log({url:req.url})
    try {
      const { phone, amount, customerName, email, address, city, postalCode, deliveryNotes } = await req.json();
      const data = await safaricomDarajaApi.intiateC2bStkPush(phone, amount);
  
      console.log('Guest checkout details:', {
        customerName,
        email,
        address,
        city,
        postalCode,
        deliveryNotes,
      });

      return NextResponse.json({ success: true, data, order: { customerName, email, address, city, postalCode, deliveryNotes } });
    } catch (error: any) {
      return NextResponse.json({ error: error?.message || error }, { status: 500 });
    }
  }