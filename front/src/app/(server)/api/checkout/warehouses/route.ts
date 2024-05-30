import { NextRequest,NextResponse } from "next/server"

const urlUkrPoshta = 'https://www.ukrposhta.ua/address-classifier-ws'
const methodPostoffices  = '/get_postoffices_by_postcode_cityid_cityvpzid'

const ApiKeyUP = process.env.UKRPOSHTA_KEY

export async function GET(request: NextRequest) {
  const CityId= request.nextUrl.searchParams.get("city_id");
  const response = await fetch(`${urlUkrPoshta}${methodPostoffices}?city_id=${CityId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${ApiKeyUP}`,
    },
  });
  const data = await response.json();
  return NextResponse.json(data.Entries.Entry)
}