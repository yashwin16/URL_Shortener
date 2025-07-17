import { getCustomShortUrl, getShortUrlbyUserAndfullUrl, saveShortUrl } from "../dao/shortUrl.js"
import { generateNanoId } from "../utils/helper.js"

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = generateNanoId(7)
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async (url,userId,slug=null) => {
    const existing= await getShortUrlbyUserAndfullUrl(userId,url)
    if(existing) return existing.short_url

    if(slug){
        const existingSlug = await getCustomShortUrl(slug)
        if(existingSlug) throw new Error("This custom url already exists")
    }
    const shortUrl = slug || generateNanoId(7)

    await saveShortUrl(shortUrl,url,userId)
    return shortUrl
}