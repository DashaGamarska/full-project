import { NextRequest,NextResponse } from "next/server"

const urlUkrPoshta = 'https://www.ukrposhta.ua/address-classifier-ws'
const methodAreas = '/get_regions_by_region_ua'

const ApiKeyUP = process.env.UKRPOSHTA_KEY

export async function GET() {
  const response = await fetch(`${urlUkrPoshta}${methodAreas}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${ApiKeyUP}`,
    },
  });
  const data = await response.json();
  return NextResponse.json(data.Entries.Entry)
}