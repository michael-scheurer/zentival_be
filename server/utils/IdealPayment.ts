export default class IdealPayment {
  private readonly apiKey: string
  private readonly instance: string
  private readonly baseUrl: string

  constructor() {
    const runtimeConfig = useRuntimeConfig()
    this.apiKey = runtimeConfig.idealPaymentApiKey as string
    this.instance = runtimeConfig.idealPaymentInstance as string
    this.baseUrl = 'https://api.ideal-pay.ch/v1.0'
  }

  public async getTransactions(
    params: Record<string, string | number> = {},
  ): Promise<any> {
    const queryParams = new URLSearchParams({
      instance: this.instance,
      ...Object.fromEntries(
        Object.entries(params).map(([k, v]) => [k, String(v)]),
      ),
    })

    const url = `${this.baseUrl}/Transaction/?${queryParams.toString()}`
    console.log(url)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-API-KEY': this.apiKey,
      },
    })

    if (response.status >= 200 && response.status <= 299) {
      return response.json()
    }

    const body = await response.text()
    console.error(`Payrexx API error ${response.status} for ${url}: ${body}`)
    throw new Error(
      `Payrexx API answered with status code ${response.status}: ${body}`,
    )
  }
}
