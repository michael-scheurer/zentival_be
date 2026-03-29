export default class Mollie {

  private readonly baseUrl: string
  private readonly authorization: string

  constructor() {
    const runtimeConfig = useRuntimeConfig()

    this.baseUrl = 'https://api.mollie.com/v2'
    this.authorization = `Bearer ${runtimeConfig.mollieApiKey}`
  }

  public async action ({method, url, body, params}: {
    method: string,
    url: string,
    body?: object,
    params?: {[key: string]: string | number}
  }): Promise<any> {
    const paramString = params ? `?${new URLSearchParams(params).toString()}` : undefined
    const bodyString = body ? JSON.stringify(body) : undefined
    const fullUrl = `${this.baseUrl}${url}${paramString || ''}`
    console.log(fullUrl)

    const response: Response = await fetch(fullUrl, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.authorization
      },
      body: bodyString
    })

    if (response.status >= 200 && response.status <= 299) {
      return response?.json()
    }
    console.log(response)
    throw new Error(`Mollie answered with status code ${response.status}. Check Logs for more information`)
  }
}