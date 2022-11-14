import { API_BASE_URL, BEARER_TOKEN } from "./config";

const apiData = {
    async search(term, location) {
    const res = await fetch(API_BASE_URL+`/businesses/search?term=${term}&location=${location}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        });
        const jsonRes = await res.json();
        if (jsonRes.businesses) {
            return jsonRes.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                isClosed: business.is_closed, 
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                transactions: business.transactions, 
                latitude: business.coordinates.latitude,
                longitude: business.coordinates.longitude,
                category: business.categories[0].title,
                rating: business.rating,
                displayPhone: business.display_phone,
                reviewCount: business.review_count
            }))
     }
  }
}

export default apiData;