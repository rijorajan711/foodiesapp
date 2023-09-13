export async function cardData(){
    const carddata=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=nul")
    const jsonData=await carddata.json()
    const data=jsonData?.data?.cards
    return data
}